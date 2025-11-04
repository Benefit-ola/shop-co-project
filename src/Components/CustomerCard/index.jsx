import React from 'react'

const CustomersCard = ({stars,name,comment}) => {
  return (
    <>
      <div>
        <div className="border p-6 rounded-xl hover:shadow-lg cursor-pointer transition-shadow duration-300">
          <div className="text-3xl mb-4">{stars}</div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-700">{comment}</p>
        </div>
      </div>
    </>
  )
}

export default CustomersCard
