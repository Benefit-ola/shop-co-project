import React from 'react'

const BrowseCard = ({text,image}) => {
  return (
    <>
      <div className="bg-gray-400 p-4 rounded-xl flex flex-col items-center hover:shadow-lg cursor-pointer transition-shadow duration-300">
        <img src={image} alt={text} className="mb-4 w-full h-auto rounded-md" />
        <h3 className="text-lg font-semibold text-center ">{text}</h3>

      </div>
    </>
  )
}

export default BrowseCard
