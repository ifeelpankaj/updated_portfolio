import npmPackageGif from '../__assets__/Project001.gif';
import setupGif from '../__assets__/How.png';
import StylishLoader from '../__components__/loader.jsx';
import InfiniteCountdown from '../__components__/__countdown.jsx';
import suduko from '../__assets__/sudoku.png';

const experimentsData = [
    {
        title: 'Sudoku Solver',
        description: 'A web-based Sudoku solver that efficiently finds solutions for any valid Sudoku puzzle.',
        gif: suduko,
        link: 'https://sudoku-solver-dlmb.vercel.app/'
    },

    {
        title: 'Frontend Setup',
        description: 'A robust initial setup for React projects with modern tooling and best practices.',
        gif: setupGif,
        link: 'https://github.com/Myself-Pankaj/Initial_Frontend_Set_Up/blob/master/README.md'
    },
    {
        title: 'NPM Package',
        description: 'A reusable npm package for developers featuring countdown functionality with customization options.',
        gif: npmPackageGif,
        link: 'https://www.npmjs.com/package/react-sale-countdown'
    },
    {
        title: 'Countdown Timer',
        description: 'Interactive countdown component with elegant animations and responsive design.',
        component: <InfiniteCountdown />,
        link: 'https://codepen.io/ifeelpankaj/pen/GgKKBKj'
    },
    {
        title: 'Custom Loader',
        description: 'A visually engaging loader animation for web apps with smooth transitions and modern design.',
        component: (
            <StylishLoader
                size="large"
                color="#00d4ff"
            />
        ),
        link: 'https://codepen.io/ifeelpankaj/pen/WbeeKrM'
    }
];

const Experiments = () => {
    return (
        <section
            className="experiment_container"
            id="experiments">
            <h1 className="experiment_title">My Experiments</h1>
            <div className="experiment_grid">
                {experimentsData.map((experiment, index) => (
                    <article
                        key={index}
                        className="experiment_card">
                        {experiment.component ? (
                            <div className="experiment_dynamicComponent">{experiment.component}</div>
                        ) : (
                            <img
                                src={experiment.gif}
                                alt={`${experiment.title} preview`}
                                className="experiment_image"
                                loading="lazy"
                            />
                        )}

                        <h2 className="experiment_cardTitle">{experiment.title}</h2>
                        <p className="experiment_description">{experiment.description}</p>
                        <a
                            href={experiment.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="experiment_link"
                            aria-label={`Learn more about ${experiment.title}`}>
                            Learn More
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Experiments;

// https://codepen.io/ifeelpankaj/pen/GgKKBKj  Count Down

// https://codepen.io/ifeelpankaj/pen/WbeeKrM Classy Loader

// Production Level Set up for server

// Production Level set up for vite react frontend
