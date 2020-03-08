import React from 'react'

import { Link } from 'gatsby'
import BirdTrackerImage from "../components/images/birdTrackerImage"
import BirdSanctuaryImage from "../components/images/birdSanctuaryImage"
import ThirstyFalconImage from "../components/images/thirstyFalconImage"
import WeatherAppImage from "../components/images/weatherAppImage"
import ChatAppImage from "../components/images/chatAppImage"
import SEO from "../components/seo"

//this page is a mess but I don't really ever plan on reusing this

const Work = () => (
    <React.Fragment>
        <nav>
            <Link to="/">
                Return <span role="img" aria-label="home">🏠</span>
            </Link>

            <a href="https://github.com/gallinulachloropus">
                GitHub <span role="img" aria-label="computer">💻</span>
            </a>
        </nav>
        <section className="portfolio">
            <SEO title="Portfolio" />

            <article className="chat-app">
                <h1><span role="img" aria-label="chat">💬</span> ChatZone</h1>
                <p>A chatroom made with WebSockets.</p>
                <ul>
                    <li>Uses a NodeJS backend with Express</li>
                    <li>Uses SocketIO for WebSocket server</li>
                    <li>React for frontend</li>
                    <li>Custom React Hooks</li>
                    <li>SCSS for styling</li>
                </ul>
                <div className="portfolio-image"><ChatAppImage /></div>
                <a href="https://chat-zone.herokuapp.com/">Use ChatZone</a>

            </article>


            <article className="weather-app">
                <h1><span role="img" aria-label="cloud">⛅</span> WeatherApp</h1>
                <p>A weather app made with React.</p>
                <ul>
                    <li>Utilizes React Hooks</li>
                    <li>Uses the OpenWeather API for forecast</li>
                </ul>
                <div className="portfolio-image"><WeatherAppImage /></div>
                <a href="http://its-the-weather.surge.sh/">Use WeatherApp</a>

            </article>

            <article className="portfolio">
                <h1><span role="img" aria-label="heart">❤️</span> This Website</h1>
                <p>A portfolio website made with React and GatsbyJS</p>
                <ul>
                    <li>Utilizes React Hooks</li>
                    <li>GatsbyJS for page generation</li>
                    <li>Cross-browser and cross-platform compatibility</li>
                    <li>Custom Neumorphic UI</li>
                </ul>
                <Link to="/">Front page</Link>

            </article>

            <article className="bird-tracker">
                <h1><span role="img" aria-label="bird">🐦</span> BirdTracker</h1>
                <p>A bird watching app made with React.</p>
                <ul>
                    <li>Utilizes React Hooks</li>
                    <li>Uses the WikiMedia API for images and information</li>
                    <li><code>react-router</code> for routing</li>
                    <li><code>localStorage</code> api for tracking birds seen</li>
                    <li>Custom UI</li>
                </ul>
                <div className="portfolio-image"><BirdTrackerImage /></div>
                <a href="http://bird-tracker.surge.sh/">Use BirdTracker</a>

            </article>

            <article className="bird-sanctuary">
                <h1><span role="img" aria-label="nature">🏞️</span> Bird Sanctuary Website</h1>
                <p>A website for a fictional bird sanctuary, written in HTML5 and CSS3.</p>
                <div className="portfolio-image"><BirdSanctuaryImage /></div>
                <a href="http://exultant-vacation.surge.sh/">View Live</a>
            </article>

            <article className="thirsty-falcon">
                <h1><span role="img" aria-label="beer mug">🍺</span> Thirsty Falcon</h1>
                <p>A website for a bar in Dunedin, FL made in WordPress</p>
                <div className="portfolio-image"><ThirstyFalconImage /></div>
                <a href="http://thirstyfalcon.com/">View Live</a>
            </article>
        </section>
    </React.Fragment>
)

export default Work
