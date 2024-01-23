import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import './Personality.css'

export default function Personality() {

    return (
        <section
            id="personality-section"
        >
            <h1 className="personality-header">Personality</h1>
            <div className="personality-card-container">
                {
                    personalityArr.map((personality, index) => (
                        <PersonalityCard {...personality} index={index} />
                    ))
                }
            </div>
        </section>
    )
}

const PersonalityCard = ({ header, desc, index }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        const card = document.querySelector(`#card_${index}`)
        if (isInView) {
            card.classList.add('personality-card-animated')
        }
    }, [isInView])

    return (
        <div className="personality-card" id={`card_${index}`} ref={ref}>
            <p className="personality-card-header">{header}</p>
            <p className="personality-card-p">{desc}</p>
        </div>
    )
}

const personalityArr = [
    {
        header: 'discipline',
        desc: "Discipline is the cornerstone of my approach—a guiding force that shapes every endeavor. With a structured mindset, I navigate complexities with precision, ensuring each project is a testament to the commitment I bring to my craft. It's not just about tasks; it's about infusing every effort with an unwavering focus on excellence."
    },
    {
        header: 'Self-Educate',
        desc: "In the dynamic realm of technology, my journey reflects the power of self-education. As a self-taught coder, I've embraced the challenge of mastering intricate languages and frameworks independently, demonstrating not only technical proficiency but a relentless pursuit of knowledge and growth."
    },
    {
        header: 'resilience',
        desc: "In the face of challenges, resilience becomes my secret weapon. Every setback is an opportunity to grow, every obstacle a chance to learn. Resilience, to me, is not just bouncing back; it's bouncing forward, armed with newfound knowledge and an unyielding determination to overcome, innovate, and create solutions that stand strong in the face of change."
    },
]