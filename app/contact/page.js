import Link from 'next/link'
import React from 'react'

const page = ({ children }) => {
  return (
    <>
      <div className='flex mx-6 items-center'>
        <div>
          <div>
            <Link href='https://www.instagram.com/mohanavenkatesh.a/'>Instagram</Link>
          </div>
          <div>
            <Link href='https://github.com/Mohanavenkatesh'>Github</Link>
          </div>
          <div>
            <Link href='https://www.linkedin.com/in/mohanavenkatesh-a-3574382ab/'>LinkedIn</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default page