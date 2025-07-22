import experiences from '../__assets__/experience.json';
import resume from '../__assets__/resume.pdf';
const Experience = () => {
    return (
        <div
            className="exp_timeline-wrapper"
            id="experience">
            <h2 className="exp_timeline-title">My Professional Journey</h2>
            <div className="exp_timeline">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`exp_timeline-item ${index % 2 === 0 ? 'exp_left' : 'exp_right'}`}>
                        <div className="exp_content">
                            <h3>{exp.year}</h3>
                            <h4>{exp.company}</h4>
                            <h5>{exp.role}</h5>
                            <ul>
                                {exp.responsibilities.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <Resume />
        </div>
    );
};
// Add this after your Experience component
const Resume = () => {
    return (
        <div
            className="resume-section"
            id="resume">
            <div className="resume-container">
                <div className="resume-header">
                    <span className="resume-icon">📄</span>
                    <h3 className="resume-title">Resume</h3>
                </div>
                <p className="resume-description">Download my complete professional profile.</p>
                <a
                    href={resume}
                    download
                    className="download-btn">
                    <span className="btn-icon">⬇</span>
                    Download PDF
                </a>
            </div>
        </div>
    );
};
export default Experience;
