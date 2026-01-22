import React from 'react'

const Button = ({className, children, ...props }) => {
  return (
    <button
      className={`${className} text-black px-4 py-2 rounded-full hover:bg-gray-300`}
      {...props}
    >
      {children}
    </button>
    
  )
}

export default Button
