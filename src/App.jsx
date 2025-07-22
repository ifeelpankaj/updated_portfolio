import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './__pages__/__home';
import Header from './__components__/__header';
import Projects from './__pages__/__projects';
import Experience from './__pages__/__experience';
import Experiments from './__pages__/__experiments';
import Footer from './__pages__/__footer';
import Blogs from './__pages__/__blogs';

function App() {
    const [theme, setTheme] = React.useState('light');
    React.useEffect(() => {
        const handleContextMenu = (e) => e.preventDefault();
        document.addEventListener('contextmenu', handleContextMenu);
        return () => document.removeEventListener('contextmenu', handleContextMenu);
    }, []);

    // App.js
    React.useEffect(() => {
        document.documentElement.classList.remove('light');
        if (theme === 'light') {
            document.documentElement.classList.add('light');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Optional: Load theme preference from localStorage on mount
    React.useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            <Router>
                <Header
                    onToggleTheme={toggleTheme}
                    currentTheme={theme}
                />
                <Home />
                <Projects />
                <Experience />
                <Blogs />
                <Experiments />
                <Footer />
            </Router>
        </>
    );
}

export default App;
