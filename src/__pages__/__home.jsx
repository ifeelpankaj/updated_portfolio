import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs';
import me from '../__assets__/me.png';

const Home = () => {
    const isMobile = window.innerWidth <= 768;
    const chevronRef = useRef(null);
    const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Enhanced animations with stagger effects
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                duration: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10
            }
        }
    };

    const titleVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 20,
                duration: 1
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0, rotate: -10 },
        visible: {
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: 0.5
            }
        }
    };

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (chevronRef.current) {
                chevronRef.current.style.opacity = entry.isIntersecting ? 1 : 0;
            }
        });

        if (chevronRef.current) {
            observer.observe(chevronRef.current);
        }

        const handleScroll = () => {
            const scrollHeight = document.body.scrollHeight;
            const scrollTop = window.scrollY || window.pageYOffset;
            const clientHeight = window.innerHeight;
            const threshold = isMobile ? 0.9 : 0.8;
            setIsScrolledToEnd(scrollTop + clientHeight >= scrollHeight * threshold);
        };

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isMobile]);

    return (
        <div
            className="homepage"
            id="home">
            {/* Floating elements for parallax effect */}
            <div
                className="floating-element"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                }}
            />

            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="content-section">
                <div>
                    <motion.h1
                        variants={titleVariants}
                        className="hero-heading">
                        Hi, I Am <br />
                        <span className="accent-text">Pankaj Kholiya</span>
                    </motion.h1>

                    <motion.div
                        variants={itemVariants}
                        className="typewriter-container">
                        <Typewriter
                            options={{
                                strings: ['Full Stack Developer', 'Software Engineer', 'Problem Solver', 'Code Architect', 'Backend Developer'],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                                wrapperClassName: 'typewriterpara',
                                cursor: '|'
                            }}
                        />
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="cta-buttons">
                        <motion.a
                            href="mailto:ifeelpankaj@gmail.com"
                            className="btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            <span>Hire Me</span>
                        </motion.a>

                        <motion.a
                            href="#work-Done"
                            className="btn-link"
                            whileHover={{ x: 5 }}
                            transition={{ type: 'spring', stiffness: 400 }}>
                            Projects <BsArrowUpRight />
                        </motion.a>
                    </motion.div>

                    <motion.aside
                        variants={itemVariants}
                        className="stats-section">
                        <motion.article
                            whileHover={{ y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}>
                            <p>20+</p>
                            <span>Projects Done</span>
                        </motion.article>

                        <motion.article
                            data-special
                            whileHover={{ y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}>
                            <p>Contact</p>
                            <span>pankajkholiya04@gmail.com</span>
                        </motion.article>
                    </motion.aside>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="image-section">
                <motion.div
                    variants={imageVariants}
                    className="image-container"
                    whileHover={{
                        scale: 1.02,
                        rotate: [0, 1, -1, 0],
                        transition: { duration: 0.3 }
                    }}>
                    <img
                        src={me}
                        alt="Pankaj Kholiya - Full Stack Developer"
                        loading="eager"
                    />
                </motion.div>
            </motion.section>

            <motion.div
                ref={chevronRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isScrolledToEnd ? 0 : 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="scroll-indicator">
                <BsChevronDown />
            </motion.div>
        </div>
    );
};

export default Home;
