import React, { useEffect, useRef } from "react";
import './Skill.css'
import { useInView } from "framer-motion";

export default function Skill() {
    const quoteRef = useRef(null)
    const isInView = useInView(quoteRef)

    useEffect(() => {
        const quote = document.querySelector('.skill-quote-header')
        if (isInView) {
            quote.classList.add('skill-quote-header-animated')
        }
    }, [isInView])

    return (
        <section id="skill-section">
            <h1 className="skill-header">What can I do ?</h1>
            <div className="skill-background" />
            <p className="skill-p">
                As a passionate self-learner, my journey is fueled by an
                insatiable appetite to master every essential skill, from
                the intricacies of design to the complexities of development.
                Driven by the belief that continuous learning is the gateway
                to innovation, I embrace the challenge of expanding my
                skill set, not merely as a goal, but as a relentless
                pursuit of excellence in every facet of the creative and
                technical spectrum.
            </p>
            <p className="skill-follow">
                Following are tools I experienced.
            </p>
            <div className="skill-list-container">
                <SkillList header="UX Tools" arr={uxArr} />
                <SkillList header="Dev Tools" arr={devArr} />
            </div>
            <p className="skill-outro">
                These tools are just the stepping stones in my journey of
                exploration. As I delve into the realm of possibilities,
                who's to say what extraordinary capabilities lie ahead in
                my future endeavors?{' '}
                <i>
                    <b>
                        The canvas of my potential remains
                        boundless,
                    </b>
                </i> awaiting the strokes of innovation and mastery
                yet to be unveiled !
            </p>
            <div className="skill-quote">
                <h1 className="skill-quote-header" ref={quoteRef}>
                    <i>
                        "A man is a by product of his thought"
                    </i>
                </h1>
            </div>
        </section>
    )
}

const SkillList = ({ header, arr }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        const container = document.querySelector(`#skill_${header.split(" ")[0]}`)
        const ul = container.querySelector('ul')
        const li = ul.querySelectorAll('li')
        if (isInView) {
            ul.classList.add('skill-list-ul-animated')
            for (let i = 0; i < li.length; i++) {
                li[i].classList.add('skill-list-li-animated')
            }
        }
    }, [isInView])

    return (
        <div className="skill-list" id={`skill_${header.split(" ")[0]}`} ref={ref}>
            <p className="skill-list-header">{header}</p>
            <ul className="skill-list-ul">
                {
                    arr.map((li, index) => (<li className="skill-list-li" style={{ "--n": index + 1 }}>{li}</li>))
                }
            </ul>
        </div>)
}

const uxArr = ['Figma', 'Customer Journey Map', 'Service Blueprint', 'Usability Testing']
const devArr = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'TypeScript', 'NodeJS']