import './Home.css';

const About = () => (
  <div className="About">
    <div className="Title">
      <h1>Nicholas Filipov</h1>
      <h2> Computer Science B.S. Graduate | Aspiring Software Engineer | Datacenter Technician III at Microsoft | Open to New Opportunities</h2>
    </div>

    <div className="content-container">
      <div className="about-section">
        <h3>About Me</h3>
        <p>
          I'm passionate about creating technology that makes a difference. 
          From an early interest in software to earning my degree in Computer Science with a concentration 
          in Software Engineering, I've grown through hands-on experience and countless hours of building, 
          learning, and problem-solving. Along the way, I've developed meaningful projects that
          reflect my dedication to innovation and continuous growth.
        </p>
        
        <p>
          I'm always excited to take on new challenges and push the boundaries of what I can do. 
          Whether it's refining a product, collaborating on a team, or learning a new framework, 
          I love the process of bringing ideas to life through code.
        </p>
        
        <p>
          Feel free to check out my portfolio to see some of the work I've done. 
          If you'd like to connect, collaborate, or just say hi, head over to the contact 
          page-I'd love to hear from you!
        </p>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <h3>Honors</h3>
          <ul>
            <li><strong>Cum Laude</strong> - UIC, B.S. in Computer Science, May 2025</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>Certifications</h3>
          <ul>
            <li><strong>Microsoft Certified: Azure Fundamentals</strong> - Microsoft, 2024</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default About;
