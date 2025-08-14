import Link from 'next/link'
import React from 'react'

const page = ({ children }) => {
  return (
    <>

      <div className='mx-6 flex flex-col items-start'>
        <h1 className='text-2xl font-semibold mb-4'>My Projects</h1>
        <p className='mb-6'>
          A few projects highlighting my frontend skills and modern web tech.
        </p>
        <div>
          <div className='flex flex-col mb-4'>
            <h2 className='font-semibold mb-1'>Project One - Bite</h2>
            <p className='mb-1'>
              Bite is a responsive food recipe web application that allows users to browse, search, and view a variety of recipes. Built with HTML, CSS, and JavaScript, the project focuses on clean UI, easy navigation, and a seamless user experience. Users can explore different cuisines and discover new dishes with ease.
            </p>
            <a
              href='https://mohanavenkatesh.github.io/Bite/'
              target='_blank'
              rel="noopener noreferrer"
              className='text-blue-600 underline'
            >
              View Project
            </a>
          </div>
          <div className='flex flex-col mb-4'>
            <h2 className='font-semibold mb-1'>Project Two - Attendance App</h2>
            <p className='mb-1'>
              Attendance App is a simple and efficient web application designed to help users track and manage attendance records. Built using modern web technologies, it allows users to add, view, and update attendance data with an intuitive interface. The project emphasizes ease of use and reliability, making it suitable for classrooms, teams, or small organizations.
            </p>
            <a
              href='https://github.com/Mohanavenkatesh/Attendance-app'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 underline'
            >
              View Project
            </a>
          </div>
        </div>
      </div>

    </>
  )
}

export default page