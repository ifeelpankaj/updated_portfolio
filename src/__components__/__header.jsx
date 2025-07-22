import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../__assets__/logo.png';
import PropTypes from 'prop-types';

const Header = ({ onToggleTheme, currentTheme }) => {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const [isMobileView, setIsMobileView] = React.useState(window.innerWidth <= 768);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleDialog = () => {
        setIsDialogOpen(!isDialogOpen);
    };

    const dialogVariants = {
        hidden: {
            opacity: 0,
            y: '-50px',
            scale: 0.95,
            filter: 'blur(4px)'
        },
        visible: {
            opacity: 1,
            y: '0',
            scale: 1,
            filter: 'blur(0px)',
            transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            y: '50px',
            scale: 0.95,
            filter: 'blur(4px)',
            transition: { duration: 0.3, ease: 'easeInOut' }
        }
    };

    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            x: '100%',
            transition: { duration: 0.3 }
        },
        visible: {
            opacity: 1,
            x: '0%',
            transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.05
            }
        }
    };

    const mobileMenuItemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 }
    };

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    React.useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { href: '#work-Done', label: 'Latest Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#blogs', label: 'Blogs' },
        { href: '#experiments', label: 'Experiments' },
        { href: '#contact', label: 'Contact' }
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.3 },
            backdropFilter: 'blur(8px)'
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3 }
        }
    };

    const about = `I'm Pankaj, a 24-year-old Indian freelance Full Stack Developer with a passion for creating innovative solutions using web technologies. 
    I enjoy solving design challenges, crafting smart user interfaces, and developing rich, user-centric web applications that deliver seamless experiences. 
    My expertise spans frontend, backend, and infrastructure, allowing me to build performant applications that address real-world problems effectively.
    Outside of coding, I love traveling to hilly and mountainous regions, where I find inspiration and relaxation.`;

    return (
        <>
            <motion.header
                className={`header_container ${currentTheme}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <div className="header_content">
                    <motion.div
                        className="header_logo_section"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                        <motion.img
                            src={logo}
                            alt="Pankaj's Portfolio"
                            className="header_logo"
                            whileHover={{
                                rotate: [0, -10, 10, -5, 0],
                                transition: { duration: 0.5 }
                            }}
                        />
                        <div className="header_logo_glow"></div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="header_nav">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className="header_nav_link"
                                onClick={link.onClick}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.1 + index * 0.1,
                                    duration: 0.5,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                whileHover={{
                                    y: -2,
                                    transition: { duration: 0.2 }
                                }}>
                                <span className="header_nav_link_text">{link.label}</span>
                                <div className="header_nav_link_underline"></div>
                            </motion.a>
                        ))}
                    </nav>

                    <div className="header_controls">
                        {/* Theme Toggle Button */}
                        <motion.button
                            className="header_theme_toggle"
                            onClick={onToggleTheme}
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                            <div className="header_theme_icon">
                                {currentTheme === 'light' ? (
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.5287 15.9294C21.3687 15.6594 20.9187 15.2394 19.7987 15.4394C19.1787 15.5594 18.5487 15.6194 17.9187 15.6194C13.9987 15.6194 10.8187 12.4394 10.8187 8.51935C10.8187 7.28935 11.0587 6.09935 11.5087 5.00935C11.9587 3.90935 12.1787 3.00935 11.8787 2.36935C11.5787 1.72935 10.7787 1.52935 9.76865 2.09935C5.33865 4.79935 2.71865 9.50935 3.29865 14.5694C4.00865 20.6994 9.29865 25.1994 15.7187 24.8594C19.4987 24.6594 22.8787 22.3394 24.7187 18.9394C25.2787 17.9194 25.0787 17.1194 24.7787 16.4794C24.5287 16.0294 21.5287 15.9294 21.5287 15.9294Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="5"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                )}
                            </div>
                        </motion.button>

                        {/* Mobile Menu Toggle */}
                        {isMobileView && (
                            <motion.button
                                className={`header_mobile_toggle ${isMobileMenuOpen ? 'active' : ''}`}
                                onClick={toggleMobileMenu}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}>
                                <span className="header_hamburger_line"></span>
                                <span className="header_hamburger_line"></span>
                                <span className="header_hamburger_line"></span>
                            </motion.button>
                        )}
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isMobileView && isMobileMenuOpen && (
                        <>
                            <motion.div
                                className="header_mobile_overlay"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={toggleMobileMenu}
                            />
                            <motion.nav
                                className="header_mobile_nav"
                                variants={mobileMenuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden">
                                <div className="header_mobile_nav_content">
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.href}
                                            href={link.href}
                                            className="header_mobile_nav_link"
                                            variants={mobileMenuItemVariants}
                                            onClick={() => {
                                                link.onClick && link.onClick();
                                                toggleMobileMenu();
                                            }}
                                            whileHover={{ x: 10 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                                            <span className="header_mobile_nav_number">0{index + 1}</span>
                                            <span className="header_mobile_nav_text">{link.label}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.nav>
                        </>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Contact Dialog */}
            <AnimatePresence>
                {isDialogOpen && (
                    <>
                        <motion.div
                            className={`header_dialog_overlay ${currentTheme}`}
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={toggleDialog}
                        />
                        <motion.div
                            className={`header_dialog ${currentTheme}`}
                            variants={dialogVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit">
                            <motion.button
                                className="header_dialog_close"
                                onClick={toggleDialog}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18 6L6 18M6 6L18 18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </motion.button>

                            <div className="header_dialog_content">
                                <motion.div
                                    className="header_about_section"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}>
                                    <h2 className="header_about_title">About Me</h2>
                                    <p className="header_about_text">{about}</p>
                                </motion.div>

                                <motion.div
                                    className="header_contact_section"
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}>
                                    <h2 className="header_contact_title">Get In Touch</h2>
                                    <form className="header_contact_form">
                                        <div className="header_form_group">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="header_form_input"
                                                required
                                            />
                                            <label className="header_form_label">Name</label>
                                        </div>
                                        <div className="header_form_group">
                                            <input
                                                type="email"
                                                placeholder="your.email@example.com"
                                                className="header_form_input"
                                                required
                                            />
                                            <label className="header_form_label">Email</label>
                                        </div>
                                        <div className="header_form_group">
                                            <textarea
                                                placeholder="Tell me about your project or just say hello!"
                                                className="header_form_textarea"
                                                required></textarea>
                                            <label className="header_form_label">Message</label>
                                        </div>
                                        <motion.button
                                            type="submit"
                                            className="header_form_submit"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}>
                                            <span>Send Message</span>
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </motion.button>
                                    </form>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;

Header.propTypes = {
    onToggleTheme: PropTypes.func.isRequired,
    currentTheme: PropTypes.oneOf(['light', 'dark']).isRequired
};
