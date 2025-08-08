import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>

      <div className='h-screen flex justify-center items-center'>


        <div >
          <div className='flex '>
            <h1 className='me-1'> Project One - </h1>
            <a href='https://mohanavenkatesh.github.io/Bite/' target='_blank' rel="noopener noreferrer"> Link</a>
          </div>
          <div className='flex '>
            <h1 className='me-1'> Project Two - </h1>
            <a href='https://github.com/Mohanavenkatesh/Attendance-app' target='_blank' rel='noopener noreferrer'> Link</a>
          </div>

        </div>

      </div>

    </>
  )
}

export default page