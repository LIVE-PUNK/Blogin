import React from 'react'
import AboutImg from '../images/about1.png';
import { useNavigate } from 'react-router-dom';
import boutImg from '../images/about2.webp';
const About = () => {
  return (
    <div>
    <div className='about flex justify-between items-center px-[100px]' style={{height: 'calc(100vh - 80px)'}}>
        <div className="left w-[50%] pr-[30px]">
            <h3 className='text-[60px] font-bold' style={{lineHeight: 1.2}}>
                Welcome to <span className='sp-text'>Blogin</span> — 
                Where Ideas Get Loud & Real
            </h3>
            <p className='text-[18px] mt-6 text-gray-600'>
                Blogin ain't your regular blog—it’s the drip. Only the admin squad drops the fire content, and y’all just sit back, scroll, and soak in the vibes. No posts, just pure boss-level reads. Stay curious, stay scrolling.            </p>
            <div className="flex items-center mt-6 gap-[15px]">
                <button className='btnNormal bg-purple-500'>Join the Vibe</button>
        </div>
        </div>
        <div className="right w-[40%] h-[70%]">
            <img className='w-full' src={AboutImg} alt="About Blogin" />
        </div>

        </div>
            <div className='about flex justify-between items-center px-[100px]'>
            <div className="left w-[40%] h-[70%]">
            <img className='w-full' src={boutImg} alt="About Blogin" />
        </div>

        <div className="right w-[50%] pr-[30px]">
            <h3 className='text-[60px] font-bold' style={{ lineHeight: 1.2 }}>
            From College Grind to <span className='sp-text'>Blogin</span> Glory —
            Where Real Ones Speak Loud
            </h3>
            <p className='text-[18px] mt-6 text-gray-600'>
            What started as a college project just hit main character mode. <span className='font-medium'>Blogin</span> is now your go-to scroll zone where only the admin drops savage takes. No noise, just pure signal. You read, you vibe, you repeat.
            </p>
            <div className="flex items-center mt-6 gap-[15px]">
        </div>
        </div>
        

    </div>

    </div>
  )
}

export default About;
