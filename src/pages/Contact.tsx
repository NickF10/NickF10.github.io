import React, { useState } from 'react';
import './Contact.css';

const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;
const contactTo = import.meta.env.VITE_CONTACT_TO_EMAIL as string | undefined;

const Contact: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
	const [error, setError] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		if (!name.trim() || !email.trim() || !message.trim()) {
			setError('Please fill out name, email and message.');
			return;
		}

		setStatus('sending');

		if (endpoint) {
			try {
				const res = await fetch(endpoint, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ name, email, message }),
				});

				if (res.ok) {
					setStatus('success');
					setName('');
					setEmail('');
					setMessage('');
				} else {
					const text = await res.text();
					setError(`Submission failed: ${res.status} ${text}`);
					setStatus('error');
				}
			} catch (err: any) {
				setError(String(err.message ?? err));
				setStatus('error');
			}
		} else if (contactTo) {
			// fallback using mailto: opens user's email client and pre-fills the message
			const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
			window.location.href = `mailto:${contactTo}?subject=${encodeURIComponent('Website contact')}&body=${encodeURIComponent(
				body
			)}`;
			setStatus('success');
		} else {
			setError('No contact endpoint configured. See README-contact.md for setup.');
			setStatus('error');
		}
	};

	return (
		<div className="contact-page">
			<h2>Contact Me</h2>
			<form className="contact-form" onSubmit={handleSubmit}>
				<label>
					Name
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Your name"
						required
					/>
				</label>

				<label>
					Email
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="you@example.com"
						required
					/>
				</label>

				<label>
					Message
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder="Write your message here"
						rows={6}
						required
					/>
				</label>

				<div className="form-actions">
					<button type="submit" disabled={status === 'sending'}>
						{status === 'sending' ? 'Sending…' : 'Send Message'}
					</button>
				</div>

				{status === 'success' && <p className="form-success">Thanks — your message was sent.</p>}
				{status === 'error' && <p className="form-error">{error || 'Something went wrong.'}</p>}
				{status === 'idle' && error && <p className="form-error">{error}</p>}
			</form>
		</div>
	);
};

export default Contact;