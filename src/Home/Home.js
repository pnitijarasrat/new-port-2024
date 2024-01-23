import React from "react";
import './Home.css'

const Home = () => {
    const ScrollHandler = (id) => {
        const element = document.querySelector(id)
        element?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section
            data-scroll-section
            id="home-section"
        >
            <div>
                <h1
                    className="hero-header"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="5"
                    data-scroll-target="#home-section"
                >
                    hi.
                    <br />
                    I'm Puriwat.
                </h1>
                <div
                    className="hero-content"
                >
                    <ul className="hero-list">
                        <li>Engineer</li>
                        <li>UX Designer</li>
                        <li>Frontend Developer</li>
                    </ul>
                    <p
                        className="hero-copy"
                    >
                        Design and Develop. Puriwat is your all-in-one player.
                    </p>
                </div>
                <div className="hero-button">
                    <button onClick={() => ScrollHandler('#contact-section')}>Work Together !</button>
                    <button onClick={() => ScrollHandler('#about-section')}>See more</button>
                </div>
            </div>
            {/* <div className="hero-image">

            </div> */}
            <div
                className="hero-scroll"
            >
                Scroll
            </div>
        </section>
    )
}

export default Home
