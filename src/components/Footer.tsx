import { Github } from 'lucide-react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                {/* Left: Logo */}
                <div className="footer-logo">
                    <span className="logo-text">Construct</span>
                    <span className="logo-tag">Autonomous AI</span>
                </div>

                {/* Center: Links */}
                <nav className="footer-links">
                    <a href="https://construct-ide.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Launch App
                    </a>
                    <a href="https://github.com/Ramakrishna1967/Construct" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </nav>

                {/* Right: Socials */}
                <div className="footer-socials">
                    <a href="https://github.com/Ramakrishna1967/Construct" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github size={20} />
                    </a>
                </div>
            </div>


        </footer>
    )
}

export default Footer
