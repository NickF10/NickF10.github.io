import { Link, useLocation } from 'react-router-dom';
import GithubLogo from '../assets/GithubLogo.png';
import LinkedInLogo from '../assets/LinkedInLogo.png'
import './Navbar.css';

//Navigation link needs a Path and a Name
interface NavLink {
    path: string;
    name: string;
}

const Navbar = () => {
    const location = useLocation();

    //All screens to go to
    const navItems : NavLink[] = [
        { path: '/', name: 'Home' },
        { path: '/projects', name: 'Projects' },
        { path: '/experience', name: 'Experience' },
        { path: '/contact', name: 'Contact' },
    ];

    //Downloads resume
    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/NicholasFilipovResume.pdf';
        link.download = 'NicholasFilipovResume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <nav className="navbar">  {/* Top navbar */}
            <ul className="navlinks">
                {/* My Name far left on navbar */}
                <li className="name">
                    <span>Nicholas Filipov</span>
                </li>

                {/* Adds each link from the navItems to navbar */}
                {navItems.map((link) => (
                    <li key={link.name} className="navitems">
                        <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>{link.name}</Link>
                    </li>
                ))}

                {/* Created clickable github icon to open personal github page */}
                <li className="github-icon">
                    <a href="https://github.com/NickF10" target="_blank" rel="noopener noreferrer">
                        <img src={GithubLogo} alt="GitHub" />
                    </a>
                </li>

                {/* Created clickable linkedin icon to open personal linkedin page */}
                <li className="linkedin-icon">
                    <a href="https://www.linkedin.com/in/nicholas-filipov-a057a4224/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInLogo} alt="LinkedIn" />
                    </a>
                </li>

                {/* Resume button calls function to download resume as a pdf */}
                <li className="resume-button">
                    <button onClick={handleResumeDownload}>Resume💾</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;