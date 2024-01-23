import React, { useEffect, useRef } from "react";
import './Util.css'
import { useInView } from "framer-motion";

export const Header = ({ header }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        const header = document.querySelector('.util-header')
            .querySelector('h1')
        if (isInView) {
            header.classList.add('util-header-animated')
        }
    })

    return (
        <div className="util-header" ref={ref}>
            <h1 >
                {header}
            </h1>
        </div>
    )
}