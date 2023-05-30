import React from 'react';
import '../css/style.css';
import live_show from '../img/live-show.jpg'
import convention from '../img/convention.jpg'
import last_image from '../img/last-image.png'

const Section1 = () => {
    return (
        <div id="info" className="container-fluid">
        <h2 id="what" className="colored-h2">WHAT is this Event?</h2>
        <p>
            This event is one of the biggest into the metaverse.
            Here we will be discussing about a varity of topics, incluiding a glimpse into the future of work.
            A big variety of professionals as well as leaders in XR will be giving some excited talks about the 
            metaverse and what is coming.
            <br></br>
            They all will be talking about the next topics:
            <br></br>
            <ul>
                <li className="info-li"><span className="bullet">✪</span> What is the Metaverse and what role will it play in the future of work?</li>
                <li className="info-li"><span className="bullet">✪</span> Why has the Metaverse and virtual worlds become a more relevant topic today than ever before?</li>
                <li className="info-li"><span className="bullet">✪</span> What are the technology advancements still needed to encourage mass adoption?</li>
            </ul>
        </p>
        <img id="convention-image" className="img-fluid imgs" src={convention} alt="Convention via Metaverse"></img>
        <h2 id="when" className="colored-h2">WHEN is it going to be?</h2>
        <p>
            This event will take place on <b>May 13th, 12 PM PST</b>
            <br></br>
            Now you know, reserve this day to enjoy this great event alongside the greatest minds that help improve
            the Metaverse.
        </p>
        <img id="live-show" className="img-fluid imgs" src={live_show} alt="Live show through Metaverse"></img>
        <h2 id="where" className="colored-h2">WHERE is it going to be?</h2>
        <p>
            This event will be held on <b>The Virbela Open Campus</b>
            <br></br>
            The following images were taken at one of our past events, where you can see many people having fun 
            and interacting with each other. What are you waiting for? Join us and be a part of this life-changing event!
        </p>
        <img id="last-image" className="img-fluid imgs" src={last_image} alt="People enjoying the Metaverse"></img>
    </div>
    );
};

export default Section1;