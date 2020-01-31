import React from 'react'

import { Link } from 'gatsby'
import BirdTrackerImage from "../components/images/birdTrackerImage"
import BirdSanctuaryImage from "../components/images/birdSanctuaryImage"
import ThirstyFalconImage from "../components/images/thirstyFalconImage"
import SEO from "../components/seo"

//this page is a mess but I don't really ever plan on reusing this

const Work = () => {
    return (
        <React.Fragment>
            <nav>
                <Link to="/">
                    Return <span role="img" aria-label="home">🏠</span>
                </Link>
            </nav>
            <section className="portfolio">
                <SEO title="Portfolio" />

                <article className="portfolio">
                    <h1>This Website <span role="img" aria-label="heart">❤️</span></h1>
                    <h2>A portfolio website made with React and GatsbyJS</h2>
                    <ul>
                        <li>React Hooks</li>
                        <li>GatsbyJS</li>
                        <li>Responsive neumorphic UI</li>
                    </ul>
                    <Link to="./">Front page</Link>

                </article>

                <article className="bird-tracker">
                    <h1>BirdTracker</h1>
                    <h2>A bird watching app made with React.</h2>
                    <ul>
                        <li>React Hooks</li>
                        <li>Uses the WikiMedia API for images and information</li>
                        <li><code>react-router</code> for routing</li>
                        <li><code>localStorage</code> api for tracking birds seen</li>
                        <li>Custom UI</li>
                    </ul>
                    <div className="portfolio-image"><BirdTrackerImage /></div>
                    <a href="http://bird-tracker.surge.sh/">Use BirdTracker</a>

                </article>

                <article className="bird-sanctuary">
                    <h1>Bird Sanctuary Website</h1>
                    <h2>A website for a fictional bird sanctuary, written in HTML5 and CSS3 using flexbox.</h2>
                    <div className="portfolio-image"><BirdSanctuaryImage /></div>
                    <a href="http://exultant-vacation.surge.sh/">View Live</a>
                </article>

                <article className="thirsty-falcon">
                    <h1>Thirsty Falcon</h1>
                    <h2>A website for a bar in Dunedin FL made in WordPress</h2>
                    <div className="portfolio-image"><ThirstyFalconImage /></div>
                    <a href="http://thirstyfalcon.com/">View Live</a>
                </article>
            </section>
        </React.Fragment>
    )
}

export default Work
