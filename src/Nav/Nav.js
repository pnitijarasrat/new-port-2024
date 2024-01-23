import React, { useState, useEffect } from "react";
import './Nav.css'

export default function Nav() {
    const [isNavOpened, setIsNavOpened] = useState(false)

    const hamburgerHandler = () => {
        setIsNavOpened(true)
    }
    const closeHandler = () => {
        setIsNavOpened(false)
    }

    const ScrollHandler = (id) => {
        const element = document.querySelector(id)
        window.requestAnimationFrame(() =>
            element?.scrollIntoView({ behavior: "smooth", block: 'start', inline: 'nearest' })
        )
    }

    useEffect(() => {
        const nav = document.querySelector('.nav-ul-mobile')
        if (isNavOpened) {
            nav.classList.add('nav-ul-mobile-in-animated')
            nav.classList.remove('nav-ul-mobile-out-animated')
        }
        else if (!isNavOpened && nav.classList.contains('nav-ul-mobile-in-animated')) {
            nav.classList.add('nav-ul-mobile-out-animated')
            nav.classList.remove('nav-ul-mobile-in-animated')
        }
    }, [isNavOpened])

    return (
        <nav id="nav-section">
            <h1 className="nav-logo">PuriwatN</h1>
            {isNavOpened ? (
                <div className="nav-backdrop" />
            ) : null}
            <ul className={`nav-ul-mobile`}>
                <li className="nav-ul-li"
                    onClick={closeHandler}
                >
                    <img
                        src="https://cdn.icon-icons.com/icons2/2715/PNG/512/x_icon_172101.png"
                        alt="close"
                    />
                </li>
                {
                    navArr.map((section) => (
                        <li className="nav-ul-li" onClick={
                            () => {
                                ScrollHandler(`#${section.split(" ")[0].toLowerCase()}-section`)
                                closeHandler()
                            }
                        }
                        >
                            {section}
                        </li>))
                }
            </ul>
            <ul className="nav-ul-desktop">
                {
                    navArr.map((section) => (
                        <li className="nav-ul-li" onClick={() => {
                            ScrollHandler(`#${section.split(" ")[0].toLowerCase()}-section`)
                            closeHandler()
                        }}>
                            {section}
                        </li>))
                }
            </ul>
            <button className="nav-button"
                onClick={hamburgerHandler}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
                    alt="hamburger"
                />
            </button>
        </nav>
    )
}

const navArr = ['Home', 'About', 'Personality', 'Skill', 'Why we should work together ?', 'Contact']