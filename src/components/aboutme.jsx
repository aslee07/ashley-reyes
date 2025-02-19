import '../styles/about.css';
import profileImage from '../assets/images/cat.png';

const About = () => {
    return (
        <section className="about-container" id="about">
            <div className="about-image">
                <img src={profileImage} alt="Ashley Khate Reyes" />
            </div>
            <div className="about-content">
                <h2 className="section-title">About Me</h2>
                <p className="about-text">
                    Hi, I'm <strong>Ashley Khate Reyes</strong>, A Intermediate layout artist and graphic designer, during my college days i have been the project manager and creatives committee head of our college designing amazing and unique contents such as pubmats, etc.
                    My goal is to craft visually appealing and highly functional websites that enhance user experience. hence, i am passionate about consistently advancing my knowledge and skills. 
                </p>
               
                <a href="#projects" className="btn">View My Work</a>
            </div>
        </section>
    );
};

export default About;
