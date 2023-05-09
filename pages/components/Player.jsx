import React, { useEffect } from 'react'
import {AiFillPlayCircle,AiFillPauseCircle} from 'react-icons/ai'
import {BsFillSkipBackwardFill} from 'react-icons/bs'
import {BsFillSkipForwardFill} from 'react-icons/bs'
import Script from 'next/script'

export default function Player({photoUrl,isPaused}) {
  return (

    <div className='w-80 h-180 flex flex-col rounded-2xl shadow-card items-center align-middle justify-center mt-24'>
      <Script src='/player.js'></Script>
      
      <div id="seek">
        <div id='seekbar'></div>
      </div>
      <div id="timer" className='mt-56 flex gap-56 absolute'>
        <p id="currtime"></p>
        <p id="duration">zxcv</p>
      </div>
        {/* <input id="seekbar" type="range" className='h-1' min={0} max={100} /> */}
      <div className="controls bottom-6 ml-2 absolute flex gap-7">
        <BsFillSkipBackwardFill size={40} />
        <AiFillPlayCircle id='pause' size={40} className={"hidden"} />
        <AiFillPauseCircle id='playb' size={40} />
        <BsFillSkipForwardFill size={40}/>
      </div>
      {photoUrl ? 
      // <img src={photoUrl} className="w-56 -mt-20 animate-[spin_5s_ease-in-out_infinite] rounded-full" alt="" />
      <div>

        <img id='image' src={photoUrl} className="w-56 -mt-36 animate-[spin_5s_linear_infinite] rounded-full" alt="" />      
         <div className='w-12 h-12 absolute -mt-33 ml-21 rounded-full z-30 bg-white'></div> 
         <div className='w-20 h-20 absolute -mt-38 ml-18 rounded-full  bg-black'></div> 
         <div className='w-60 h-60 absolute -mt-58 -ml-2 rounded-full -z-10  bg-black'></div> 
       </div>
      :
      
      <div></div>
      }
    </div>
  )
}
