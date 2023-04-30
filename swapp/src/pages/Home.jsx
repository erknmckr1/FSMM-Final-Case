import React from 'react'
import ReactPlayer from "react-player";
function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center  text-white">
      <div className="animating-div">
        <div className='sm:w-[700px] md:w-[1024px] sm:h-[640px] w-[350px] h-[300px]'>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=a_cwkApKOt8"
          className="react-player"
          width="100%"
          height="100%"
        />
        </div>
      </div>
    </div>
  )
}

export default Home