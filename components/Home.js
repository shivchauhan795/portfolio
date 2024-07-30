import React from 'react'
import TypingEffect from './TypingEffect'

const Home = () => {
  return (

    <div className='flex flex-row flex-wrap justify-evenly items-center py-28 gap-10' id='home'>

      <div className='flex flex-col items-center gap-5'>
        <div className='flex items-center'>
          <span className='shiv uppercase text-5xl p-3 gap-2 flex flex-col'>
            hi, i am
            <TypingEffect />
          </span>
        </div>
        <div className='flex flex-row gap-4'>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shivchauhan.contact@gmail.com" target='_blank'><button className='home_contact_button uppercase border rounded-full w-40 h-14 card_border hover:scale-110 transition-all'>contact me</button></a>
          <a href="https://www.linkedin.com/in/shivchauhan795/" target='_blank'><img src='/linkedin.svg' alt="linkedin" className='hover:scale-110 transition-all' /></a>
          <a href="https://github.com/shivchauhan795/" target='_blank'><img src='/github.svg' alt="github" className='hover:scale-110 transition-all' /></a>
        </div>
      </div>

      <div>
        <img src="/shiv.jpg" alt="shiv image" className='w-64 h-80 rounded-3xl hover:scale-110 transition-all' />
      </div>
    </div>

  )
}

export default Home