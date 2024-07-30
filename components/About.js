"use client"
import React, { useState } from 'react';

const About = () => {
    const [tech] = useState(['/android.svg', '/java.svg', '/vscode.svg', '/html.svg', '/css.svg', '/js.svg', '/react.svg', '/firebase.svg', '/tailwind.svg', '/github.svg', '/redux.svg']);

    return (
        <>
            <div className='flex flex-wrap justify-evenly pt-28 my-36 gap-10' id='about'>
                <div className='projects uppercase text-4xl'>
                    About Me
                </div>
                <div className='text-wrap w-80 p-3'>
                    A highly driven and collaborative individual with
                    exceptional conflict resolution skills. Proficient
                    in time management and a quick learner with a
                    flair for innovative thinking. Eager to tackle
                    challenging tasks and contribute to the
                    community through expertise in computer
                    science and engineering.
                </div>
            </div>

            <div className="tech flex justify-center">
                <div className="tech_slide flex gap-24 p-4">
                    {tech.map((tech, techIndex) => (
                        <img key={techIndex} src={tech} alt={`tech-${techIndex}`} className='size-20 hover:scale-110 transition-all' />
                    ))}
                    {tech.map((tech, techIndex) => (
                        <img key={techIndex + tech.length} src={tech} alt={`tech-${techIndex}`} className='size-20 hover:scale-110 transition-all' />
                    ))}
                    {tech.map((tech, techIndex) => (
                        <img key={techIndex + tech.length * 2} src={tech} alt={`tech-${techIndex}`} className='size-20 hover:scale-110 transition-all' />
                    ))}
                </div>
            </div>

            <hr className='my-28' />
        </>
    );
}

export default About;