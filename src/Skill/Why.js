import React, { useEffect, useRef } from "react";
import './Why.css'
import { useInView } from "framer-motion";

export default function Why() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        const outro = document.querySelector('.why-outro')
        if (isInView) {
            outro.classList.add('why-outro-animated')
        }
    }, [isInView])

    return (
        <section id="why-section" >
            <h1 className="why-header">Why we should work together ?</h1>
            <div className="why-card-container">
                {
                    whyArr.map((why, index) => (<WhyCard {...why} index={index} />))
                }
            </div>
            <p className="why-outro" ref={ref}>
                I am the proactive force that will propel your company forward.
            </p>
        </section>
    )
}

const WhyCard = ({ header, desc, index }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        const p = document.querySelector(`#why-p-${index}`)
        if (isInView) {
            p.classList.add('why-card-p-animated')
        }
    }, [isInView])

    return (
        <div className="why-card">
            <p className="why-card-header"> {header} </p>
            <p className="why-card-p" ref={ref} id={`why-p-${index}`}>{desc}</p>
        </div>
    )
}

const whyArr = [
    {
        header: "📚 I'm can learn anything",
        desc: "I am not merely willing but eager to embrace the boundless opportunities for growth and enlightenment that learning presents. My insatiable thirst for knowledge propels me forward, ready to absorb, adapt, and excel in the pursuit of mastery."
    },
    {
        header: "👽 I'm not afraid of responsibilities",
        desc: "I fearlessly embrace and welcome responsibilities, recognizing them as stepping stones to my personal and professional evolution. With unwavering courage, I stand ready to tackle challenges, demonstrating my resilience and leadership prowess in the face of any task that comes my way."
    },
    {
        header: "🧠 I like to think",
        desc: "I am not just a thinker; I am the architect of innovative ideas, the orchestrator of strategic visions. My mind is a powerhouse of creativity and insight, weaving intellectual tapestries that shape the narrative of progress and success. In the realm of thought, I am not a passive observer; I am the influential force propelling transformative ideas into reality."
    },
]