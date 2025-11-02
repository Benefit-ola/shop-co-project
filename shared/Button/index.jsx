import React from 'react'

const Button = ({text}) => {
  return (
    <>
      <div>
        <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 '>{text}</button>
      </div>
    </>
  )
}

export default Button
