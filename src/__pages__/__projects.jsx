// eslint-disable-next-line no-unused-vars
import React from 'react';
import projects from '../__assets__/project.json';
import { Code, Github } from 'lucide-react';
import { motion } from 'framer-motion';

// console.log(getImage("pankaj.png"));
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut'
        }
    })
};

const Projects = () => {
    return (
        <section
            id="work-Done"
            className="project_section">
            <div className="project_header">
                <h2 className="heading">Latest Work</h2>
            </div>

            <div className="project_slider">
                {projects.map((project, index) => (
                    <motion.div
                        className="project_card"
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariants}>
                        <div
                            className="card_image"
                            style={{ backgroundImage: `url(${project.image})` }}
                        />

                        <div className="card_content">
                            <h3 className="project_title">{project.name}</h3>
                            <p className="desc">{project.description}</p>

                            <div className="tech_stack">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="badge">
                                        <Code size={14} /> {tech}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="repo_link">
                                <Github size={16} /> View Code
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
