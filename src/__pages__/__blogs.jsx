import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown as ChevronDown, FaChevronUp as ChevronUp } from 'react-icons/fa';

import blogs from '../__assets__/blogs.json';

const Blogs = () => {
    const [openCategory, setOpenCategory] = React.useState(null);

    const toggleCategory = (index) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const categoryVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    const contentVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.2
            }
        },
        visible: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.4,
                ease: 'easeOut'
            }
        }
    };

    return (
        <section
            className="my_blogs_showcase"
            id="blogs">
            <div className="my_blogs_container">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}>
                    Tech Blog Insights
                </motion.h1>

                <motion.div
                    className="my_blogs_categories"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible">
                    {blogs.map((category, index) => (
                        <motion.div
                            key={index}
                            className="my_blogs_category"
                            variants={categoryVariants}
                            whileHover={{
                                y: -4,
                                transition: { duration: 0.2 }
                            }}>
                            <div
                                className="my_blogs_category_header"
                                onClick={() => toggleCategory(index)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        toggleCategory(index);
                                    }
                                }}
                                aria-expanded={openCategory === index}
                                aria-controls={`category-${index}`}>
                                <div className="my_blogs_category_title">
                                    <motion.div
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: 5
                                        }}
                                        transition={{ duration: 0.2 }}>
                                        {/* {category.icon} */}
                                    </motion.div>
                                    <span>{category.title}</span>
                                </div>
                                <motion.div
                                    className="my_blogs_expand_icon"
                                    animate={{
                                        rotate: openCategory === index ? 180 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                    whileHover={{ scale: 1.1 }}>
                                    {openCategory === index ? <ChevronUp /> : <ChevronDown />}
                                </motion.div>
                            </div>

                            <motion.div
                                id={`category-${index}`}
                                className="my_blogs_category_blogs"
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible">
                                <p className="my_blogs_category_description">{category.description}</p>
                                {category.blogs.map((blog, blogIndex) => (
                                    <motion.div
                                        key={blogIndex}
                                        className="my_blogs_blog_item"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: blogIndex * 0.1, duration: 0.4 }}
                                        whileHover={{ x: 4 }}>
                                        <h3>{blog.title}</h3>
                                        <p>{blog.excerpt}</p>
                                        {blog.link ? (
                                            <a
                                                href={blog.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Read more about ${blog.title}`}>
                                                Read More
                                            </a>
                                        ) : (
                                            <span className="my_blogs_coming_soon">Coming Soon</span>
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Blogs;
