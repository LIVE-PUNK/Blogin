import React from 'react'
import Heroimg from '../images/hero.png';

const Hero = () => {
  return (
    <div className='hero flex justify-between items-center px-[100px]' style={{height: 'calc(100vh - 80px)'}}>
        <div className="left w-[50%] pl[30px]">
            <h3 className='text-[80px] font-bold'style={{lineHeight:1}}>High-performance <span className='sp-text'>Blogs</span> with low-key sarcasm</h3>
            <div className="flex item-center mt-6 gap-[15px]">
                <button className='btnNormal bg-purple-500'>Get Started</button>
                <button className='btnWhite'>Learn More</button>
            </div>
        </div>
        <div className="right w-[60%]">
            <img className='w-full pb-[15%]' src={Heroimg} alt=""/>
        </div>
    </div>
  )
}

export default Hero