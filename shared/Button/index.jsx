import React from 'react'

const Button = ({ text, ...props }) => {
  return (
    <button
      className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
      {...props}
    >
      {text}
    </button>
    
  )
}

export default Button
