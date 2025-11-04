import React from 'react'
import { frame5, frame6, frame7 } from '../../../constant'

const TopSelling = () => {
  const topSellingProducts=[

    {
      id:1,
      image: frame5,
      text:"VERTICAL STRIPED SHIRT",
      stars:"⭐⭐⭐⭐⭐",
      price:"$212"
    },
     {
      id:2,
      image: frame6,
      text:"COURAGE GRAPHIC T-SHIRT",
      stars:"⭐⭐⭐⭐⭐",
      price:"$145"
    },
      {
      id:3,
      image: frame7,
      text:"LOOSE FIT BERMUDA SHORTS",
      stars:"⭐⭐⭐⭐⭐",
      price:"$80"
    },
       {
      id:4,
      image: frame7,
      text:"FADED SKINNY JEANS",
      stars:"⭐⭐⭐⭐⭐",
      price:"$210"
    },
  ]
  return (
    <>
     <div className="grid grid-cols-4 gap-4 mt-10  text-center ">
          {topSellingProducts.map((product, index) => (
            <div key={index} className="">
              <img src={product.image} alt={product.text} className="mb-4" />
              <h3 className="font-semibold mb-2">{product.text}</h3>
              <p className="mb-2">{product.stars}</p>
              <h4 className="font-bold">{product.price}</h4>
            </div>
          ))}
        </div>
 
    
    </>
  )
}

export default TopSelling
