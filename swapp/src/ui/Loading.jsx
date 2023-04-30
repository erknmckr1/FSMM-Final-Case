import React from 'react'

function Loading() {
  return (
    <div className='w-screen h-screen relative bg-black opacity-80'>
      <div className='flex w-full h-full bottom-10 justify-center items-center absolute'>
        <img src="/loadingSW.gif" alt="loading..." />
      </div>
    </div>
  )
}

export default Loading