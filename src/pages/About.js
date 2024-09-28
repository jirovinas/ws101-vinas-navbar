// import React, { useState } from 'react';
import React, { useState } from 'react';
import './About.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import im from './img.jpg'

export default function About() {
    const [activeTab, setActiveTab] = useState('skills');

    const opentab = (tabname) => {
        setActiveTab(tabname);
    }

    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="about-col1">
                        <img src={im} alt="Jiro" />
                    </div>
                    <div className="about-col2">
                        <h1 className="subtitle">About Me</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Sem viverra aliquet eget sit amet tellus cras. Dolor magna eget est lorem ipsum dolor. 
                            Vivamus arcu felis bibendum ut tristique et. Donec et odio pellentesque diam volutpat commodo sed.
                        </p>

                        <div className="tab-titles">
                            <p 
                                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} 
                                onClick={() => opentab('skills')}>
                                Skills
                            </p>
                            <p 
                                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} 
                                onClick={() => opentab('experience')}>
                                Experience
                            </p>
                            <p 
                                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} 
                                onClick={() => opentab('education')}>
                                Education
                            </p>
                        </div>

                        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                            <ul>
                                <li><span>Python</span><br />Basic Python Programming</li>
                                <li><span>HTML</span><br />Basic HTML Structure</li>
                                <li><span>CSS</span><br />Basic CSS Design</li>
                                <li><span>JAVASCRIPT</span><br />Basic JAVASCRIPT Function</li>
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                            <ul>
                                <li><span>2022 - 2023</span><br />Basic Python Programming</li>
                                <li><span>2023 - 2024</span><br />Basic HTML, CSS and JAVASCRIPT</li>
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                            <ul>
                                <li><span>2010 - 2016</span><br />Kanlurang Mayao Elementary School</li>
                                <li><span>2016 - 2020</span><br />Lucena City National High School</li>
                                <li><span>2020 - 2022</span><br />Lucena City National High School</li>
                                <li><span>2022 - 2024</span><br />Dalubhasaan Ng Lungsod Ng Lucena</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
