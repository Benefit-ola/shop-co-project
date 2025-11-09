import React from 'react'

const ProductDetails = () => {
  const productImage = [
    {id: 1, image: ''},
    {id: 2, image: ''},
    {id: 3, image: ''},
    {id: 4, image: ''},
  ]
  return (
    <div className='flex gap-4'>
      <div className="flex flex-col gap-1">
        <div className="w-16 h-16 rounded-lg border"></div>
        <div className="w-16 h-16 rounded-lg border"></div>
        <div className="w-16 h-16 rounded-lg border"></div>
      </div>
      <div className="w-36 h-36 border rounded-lg "></div>
    </div>
  )
}

export default  ProductDetails
