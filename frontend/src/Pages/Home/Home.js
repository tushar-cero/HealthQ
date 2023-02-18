import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import "./Home.css";

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <article className="Landing flex_regular">
                <div className="container">
                    <div className="landing_grid flex_regular">
                        <div className="landing_grid_left flex_regular">
                            <div className="landing_grid_left_wraper">
                                <h1>Experience Comprehensive, Convenient Healthcare with <span className="highlight_primary">HealthQ</span></h1>
                                <p>Connect with doctors, get digital prescriptions and diagnostics, and access health content all in one place with our holistic platform.</p>
                                <ul>
                                    <li><i className='gg-arrow-long-right'></i><span>Get Connected with Top-Notch Healthcare Providers with a Tap!</span></li>
                                    <li><i className='gg-arrow-long-right'></i><span>Say Goodbye to Paper, Hello to Convenient Digital Healthcare!</span></li>
                                    <li><i className='gg-arrow-long-right'></i><span>Empower Your Health Journey with Access to Comprehensive Information.</span></li>
                                </ul>
                                <div className="btn_container">
                                    <Link to="" className="btn btn_primary">Get Started</Link>
                                    <Link to="" className="btn btn_tertiary">Login for Doctors</Link>
                                </div>
                            </div>
                        </div>
                        <div className="landing_grid_right flex_regular">
                            <figure className='background_image_contain'></figure>
                        </div>
                    </div>
                </div>
            </article>
            <article className='Showcase'>
                <div className='container'>

                </div>
            </article>
            <Footer/>
        </React.Fragment>
    );
}

export default Home;
