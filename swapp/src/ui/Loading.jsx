import React from 'react'

function Loading() {
  return (
    <div className='w-screen h-screen relative'>
      <div className='flex w-full h-full justify-center items-center absolute'>
        <img src="/loadingSW.gif" alt="loading..." />
      </div>
    </div>
  )
}

export default Loading