import React, { useEffect, useRef } from "react";
import { Header } from "../Util/Util";
import { useInView } from "framer-motion";
import './About.css'

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        const p = document.querySelector('.about-p').querySelectorAll('p')
        const sig = document.querySelector('.about-sig')
        if (isInView) {
            for (let i = 0; i < p.length; i++) {
                p[i].classList.add('about-p-animated')
            }
            sig.classList.add('about-sig-animated')
        }
    }, [isInView])

    return (
        <section
            data-scroll-section
            id="about-section"
        >
            <Header header="About" />
            <div className="about-p">
                <p >Greeting !</p>
                <p >
                    I'm Puriwat, a Frontend Developer and a UX Designer with a background in
                    Industrial Engineering. Despite my academic roots, I am a self-taught
                    coder driven by a passion for creating and enhancing, be it in the realm
                    of websites or personal growth.
                </p>
                <p ref={ref}>
                    <i>
                        <b>
                            My primary goal is to leverage my skills
                            to generate value for others
                        </b>
                    </i>, and I'm excited about the prospect of
                    bringing that value to you !
                </p>
            </div>
            <div className="about-sig">
                <p>Puriwat N.</p>
            </div>
        </section>
    )
}