import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-col p-24' id='contact'>
            <div className='projects uppercase text-4xl'>
                Let's Connect
            </div>
            <div className='flex flex-col mt-16 '>
                <h2>Say Hello at <a className='hover:font-bold transition-all' href="https://mail.google.com/mail/?view=cm&fs=1&to=shivchauhan.contact@gmail.com" target='_blank'>shivchauhan.contact@gmail.com</a></h2>
                <div className='flex items-center size-36 gap-2 h-10'>
                    <a href="https://www.linkedin.com/in/shivchauhan795/" target='_blank'><img src='/linkedin.svg' alt="linkedin" className='hover:scale-110 transition-all' /></a>
                    <a href="https://github.com/shivchauhan795/" target='_blank'><img src='/github.svg' alt="github" className='hover:scale-110 transition-all' /></a>
                    <a href="https://www.youtube.com/@shivchauhan795" target='_blank'><img src='/youtube.svg' alt="youtube" className='hover:scale-110 transition-all' /></a>
                    <a href="https://www.instagram.com/shivchauhan795/" target='_blank'><img src='/instagram.svg' alt="instagram" className='hover:scale-110 transition-all' /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact