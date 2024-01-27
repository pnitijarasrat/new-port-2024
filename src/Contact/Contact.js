import React, { useState, useEffect, useRef } from "react";
import { CiLink } from "react-icons/ci";
import './Contact.css'
import { useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const [sendStatus, setSendStatus] = useState('initial')
    const [isSending, setIsSending] = useState(false)
    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true)
        if (form.current) {
            emailjs.sendForm('service_moer4qg', 'template_ka9a1n8', form.current, 'uH4w39kVV7Armh-3T')
                .then((response) => {
                    setIsSending(false)
                    setSendStatus('sent')
                })
                .catch((error) => {
                    setIsSending(false)
                    setSendStatus('not-sent')
                    console.log(error)
                });
        } else {
            console.log('not sent')
        }
    };

    const formHeader = {
        'initial': 'Send Me Email !',
        'sent': 'Sent ! Thank You <3',
        'not-sent': 'Failed Sending ;-;'
    }

    const formHeaderColor = {
        'initial': 'black',
        'sent': 'green',
        'not-sent': 'red'
    }

    useEffect(() => {
        const liList = document.querySelector('.contact-ul')
            .querySelectorAll('li')
        const chalizard = document.querySelector('.contact-chalizard')
        if (isInView) {
            for (let i = 0; i < liList.length; i++) {
                liList[i].classList.add('contact-ul-li-animated')
            }
            chalizard.classList.add('blurInAnimation')
        }
    })


    return (
        <section id="contact-section">
            <div>
                <h1 className="contact-header">Contact</h1>
                <p className="contact-p">
                    There are several ways for us to contact each other !
                </p>
                <p className="contact-p">
                    Here are my contacts !
                </p>
                <ul className="contact-ul">
                    <li style={{ '--n': 1 }}>080-429-2884</li>
                    <li style={{ '--n': 2 }} >
                        <a href="https://www.linkedin.com/in/p-nitijarasrat/" target="_blank" rel="noreferrer">
                            Linkedin <CiLink />
                        </a>
                    </li>
                    <li style={{ '--n': 3 }}>
                        <a href="https://github.com/pnitijarasrat" target="_blank" rel="noreferrer">
                            Instagram <CiLink />
                        </a>
                    </li>
                    <li style={{ '--n': 4 }}>
                        <a href="https://www.instagram.com/qwertyadgsfhzxcvb/" target="_blank" rel="noreferrer">
                            Github <CiLink />
                        </a>
                    </li>
                    <li style={{ '--n': 5 }} ref={ref}>puriwatds@gmail.com</li>
                </ul>
                <div className="contact-chalizard" />
            </div>
            <h1 className="contact-or">or</h1>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <h1 style={{ color: formHeaderColor[sendStatus] }}>
                    {isSending ? "Sending..." : formHeader[sendStatus]}
                </h1>
                <input type="text" name="user_name" placeholder="NAME" required />
                <input type="email" name="user_email" placeholder="EMAIL" required />
                <textarea name="message" placeholder="SEND ME SOMETHING" required />
                <button>Submit</button>
            </form>
        </section>
    )
}