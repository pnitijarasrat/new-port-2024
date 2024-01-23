import React, { useEffect, useState } from 'react';
import './Nav.css'

export default function ScrollDetector(isOpen) {
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const nav = document.querySelector('nav')
        if (!isOpen) {
            if (currentScrollPos > prevScrollPos) {
                nav.classList.remove('nav-unhide')
                nav.classList.add('nav-hide')
            } else if (currentScrollPos < prevScrollPos) {

                nav.classList.remove('nav-hide')
                nav.classList.add('nav-unhide')
            }
        }

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

};