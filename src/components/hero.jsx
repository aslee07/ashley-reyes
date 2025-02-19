import { useState, useEffect } from 'react';
import '../styles/hero.css';
import profileImage from '../assets/images/ashley.png';

const titles = ["A Front-End Developer", "A Layout&Graphic Designer", "A Web Enthusiast"];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="profile-container">
            <div className="profile-content">
                <p className="intro-text">Hello Everyone, I Am</p>
                <h1 className="name-title">
                    Ashley Khate <br /> Reyes
                </h1>
                <p className="mytitle fade-text">{titles[index]}</p>
            </div>
            <div className="profile-image">
                <div className="circle"></div>
                <div className="side-box"></div>
                <div className="decorative-dots"></div>
                <img src={profileImage} alt="Ashley Khate Reyes" />
            </div>
        </div>
    );
};

export default Hero;
