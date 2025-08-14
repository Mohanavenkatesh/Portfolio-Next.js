import Link from 'next/link'
import React from 'react'

const page = ({ children }) => {
  return (
    <>
      <div className='flex flex-col mx-6 items-start'>
        <h1 className='text-2xl font-semibold mb-4'>Contact Me</h1>
        <p className='mb-6'>
          I'd love to connect! Feel free to reach out to me through any of the platforms below.
          Whether you have a question, want to collaborate, or just want to say hi, my inbox is always open.
        </p>
        <div className='flex flex-col gap-3'>
          <div>
            <Link href='https://www.instagram.com/mohanavenkatesh.a/' className='text-blue-600 underline' target='_blank' rel='noopener noreferrer'>
              Instagram
            </Link>
            <span className='ml-2 text-gray-500'>– Follow me for updates and behind-the-scenes.</span>
          </div>
          <div>
            <Link href='https://github.com/Mohanavenkatesh' className='text-blue-600 underline' target='_blank' rel='noopener noreferrer'>
              Github
            </Link>
            <span className='ml-2 text-gray-500'>– Check out my projects and code.</span>
          </div>
          <div>
            <Link href='https://www.linkedin.com/in/mohanavenkatesh-a-3574382ab/' className='text-blue-600 underline' target='_blank' rel='noopener noreferrer'>
              LinkedIn
            </Link>
            <span className='ml-2 text-gray-500'>– Connect with me professionally.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default page