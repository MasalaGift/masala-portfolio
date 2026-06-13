import "../styles/global.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand / Tagline */}
                    <div className="footer-brand">
                        <h3>Masala Gift Ratshili</h3>
                        <p>Full-Stack Developer • Building modern web & mobile experiences</p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4>Explore</h4>
                        <ul>
                            <li>
                                <button onClick={() => scrollToSection("hero-section")} className="footer-link-btn">
                                    Hero
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("projects-section")} className="footer-link-btn">
                                    Projects
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("skills-section")} className="footer-link-btn">
                                    Skills
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("experience-section")} className="footer-link-btn">
                                    Experience
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("certifications-section")} className="footer-link-btn">
                                    Certifications
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("about-section")} className="footer-link-btn">
                                    About
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact / Social */}
                    <div className="footer-social">
                        <h4>Connect</h4>
                        <div className="social-icons">
                            <a
                                href="https://github.com/MasalaGift"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="GitHub"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/giftratshili"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="LinkedIn"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="mailto:giftratshili@gmail.com"
                                className="social-icon"
                                aria-label="Email"
                            >
                                Email
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright with dynamic year */}
                <div className="footer-bottom">
                    <p>&copy; {currentYear} Masala Gift Ratshili. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}