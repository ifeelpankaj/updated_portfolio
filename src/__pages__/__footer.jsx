import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import me from '../__assets__/logo.png';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Show/hide scroll to top button based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll to top
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer
            className="footer_container"
            id="contact">
            <div className="footer_profile">
                <img
                    src={me}
                    alt="Pankaj Kholiya - Full Stack Developer"
                    loading="lazy"
                    className="footer_profile_image"
                />

                <h2 className="footer_profile_name">Pankaj Kholiya</h2>
                <p className="footer_profile_quote">Motivation is temporary, but discipline lasts forever.</p>
            </div>

            <aside className="footer_connect">
                <h2 className="footer_connect_title">Connect With Me</h2>

                <article className="footer_social_links">
                    <a
                        href="https://www.linkedin.com/in/ifeelpankaj/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my LinkedIn profile"
                        className="footer_social_link">
                        <AiFillLinkedin />
                    </a>
                    <a
                        href="https://instagram.com/ifeelpankaj"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow me on Instagram"
                        className="footer_social_link">
                        <AiFillInstagram />
                    </a>
                    <a
                        href="https://github.com/Myself-Pankaj/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Check out my GitHub repositories"
                        className="footer_social_link">
                        <AiFillGithub />
                    </a>
                </article>
            </aside>

            {showScrollTop && (
                <a
                    href="#home"
                    onClick={scrollToTop}
                    aria-label="Scroll back to top"
                    className="footer_scroll_top">
                    <AiOutlineArrowUp />
                </a>
            )}
        </footer>
    );
};

export default Footer;
