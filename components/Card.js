"use client"
import React, { useState } from 'react'

const Card = () => {
    const [values, setValues] = useState([
        {
            img: "https://tracktally.netlify.app/assets/favicon-DEfSYZkE.png",
            name: "TrackTally",
            description: "Your Trusted Money Tracking Website",
            tech: ['/html.svg', '/css.svg', '/react.svg', '/vscode.svg', '/tailwind.svg', '/github.svg', '/redux.svg'],
            codeLink: "https://github.com/shivchauhan795/TrackTally",
            liveLink: "https://tracktally.netlify.app/",
        },
        {
            img: "https://keyshield.netlify.app/assets/logo-BFPI99lc.svg",
            name: "KeyShield",
            description: "Your Trusted Password Manager",
            tech: ['/html.svg', '/css.svg', '/react.svg', '/vscode.svg', '/tailwind.svg', '/github.svg'],
            codeLink: "https://github.com/shivchauhan795/KeyShield",
            liveLink: "https://keyshield.netlify.app/",
        },
        {
            img: "https://github.com/shivchauhan795/Chatter-Application/blob/main/src/assets/favicon.png?raw=true",
            name: "Chatter Application",
            description: "A Chat Application with Custom Room ID. Login with Google Sign In. Real Time Synchronization of chats.",
            tech: ['/html.svg', '/css.svg', '/react.svg', '/firebase.svg', '/github.svg'],
            codeLink: "https://github.com/shivchauhan795/Chatter-Application",
            liveLink: "https://chatter-application.netlify.app/",
        },
        {
            img: "https://raw.githubusercontent.com/shivchauhan795/QR-Textify/main/favicon.ico",
            name: "QR Textify",
            description: "A Tool that converts text into a customizable QR Code. It is fully customizable and saved in different formats. ",
            tech: ['/html.svg', '/css.svg', '/js.svg', '/vscode.svg', '/github.svg'],
            codeLink: "https://github.com/shivchauhan795/QR-Textify",
            liveLink: "https://shivchauhan795.github.io/QR-Textify/",
        },
        {
            img: "https://play-lh.googleusercontent.com/WF4qXzM7bWiqMj3UhC6uIT0r1no86K5fNRVIAAhebknV4gMyxTPdPCH4gr0VIX58fV6Q=w240-h480-rw",
            name: "CSE Notes",
            description: "Notes Application for CSE students to find quality notes. It has more than 10,000+ Downloads on Play Store.",
            tech: ['/android.svg', '/java.svg', '/github.svg'],
            codeLink: "https://github.com/shivchauhan795/CSE-Notes",
            liveLink: "https://play.google.com/store/apps/details?id=com.shivchauhan.csenotes&hl=en_IN&gl=US",
        },
    ]);

    const handleClick = (link) => {
        window.open(link, '_blank');
    }

    return (
        <div className="flex flex-wrap gap-10 justify-center">

            {values.map((value, index) => (

                <div key={index} className='h-100 w-56 p-2 rounded-3xl border background_color card_border hover:scale-110 transition-all'>

                    <img src={value.img} alt={value.name} className='size-fit border-b rounded-t-3xl h-32 w-56 background_color card_border pb-2' />

                    <h2 className='text-center uppercase p-2 background_color'>{value.name}</h2>

                    <p className='text-xs px-1 background_color'>{value.description}</p>

                    <h2 className='text-center uppercase text-sm p-2 mt-3 background_color'>Technologies Used</h2>

                    <div className='flex flex-wrap gap-2 justify-center background_color'>

                        {value.tech.map((tech, techIndex) => (
                            <img key={techIndex} src={tech} alt={`tech-${techIndex}`} className='size-8 background_color hover:scale-110 transition-all' />
                        ))}

                    </div>

                    <div className='flex background_color justify-evenly mt-5 mb-2 gap-3'>

                        <button onClick={() => handleClick(value.codeLink)} className='view_all border px-2 text-lg rounded hover:scale-110 transition-all'>View Code</button>
                        <button onClick={() => handleClick(value.liveLink)} className='background_color border px-2 text-lg rounded card_border hover:scale-110 transition-all'>Live Link</button>

                    </div>

                </div>

            ))}

        </div>
    );
}

export default Card;