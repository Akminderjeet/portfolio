import React from 'react'
import './intro.scss'
import image from './assets/dp.png'
import imagee from './assets/down.png'
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();


    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Mern Stack", "Web Developer"],
        });
    }, []);
    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imageContainer'>
                    <img src={image} alt='as' />
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi There</h2>
                    <h1>I am Akminder</h1>
                    <h3>
                        <span ref={textRef}></span>
                    </h3>
                </div>
                <a href='portfolio'>
                    <img src={imagee} alt="alt"></img>
                </a>

            </div>

        </div>
    )
}
