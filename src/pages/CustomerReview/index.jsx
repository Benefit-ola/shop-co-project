// import React from 'react'

// const CustomersReview = () => {
//   const reviews = [
//     {
//       id:1,
//       stars:"⭐⭐⭐⭐⭐",
//       name:"Sarah M.",
//       comment:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"

//     },
//      {
//       id:2,
//       stars:"⭐⭐⭐⭐⭐",
//       name:"Alex K.",
//       comment:"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”"

//     },
//         {
//       id:3,
//       stars:"⭐⭐⭐⭐⭐",
//       name:"James L.",
//       comment:"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”"

//     },

//   ]
  
//   return (
//     <>
//       <div className="p-10  ">
//         <h2 className="text-4xl font-bold mb-8">OUR HAPPY CUSTOMERS</h2>
//         <div className="grid grid-cols-3 gap-6">
//           {reviews.map((review) => (
//             <div key={review.id} className="bg-white p-6 pl-10 rounded-xl border  shadow-lg">
//               <div className="text-3xl mb-4">{review.stars}</div>
//               <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
//               <p className="text-gray-600 text-sm">{review.comment}</p>
//             </div>
//           ))}
//         </div>


//       </div>
//     </>
//   )
// }

// export default  CustomersReview

import React from "react";

const CustomersReview = () => {
  const reviews = [
    {
      id: 1,
      stars: "⭐⭐⭐⭐⭐",
      name: "Sarah M.",
      comment:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      id: 2,
      stars: "⭐⭐⭐⭐⭐",
      name: "Alex K.",
      comment:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      id: 3,
      stars: "⭐⭐⭐⭐⭐",
      name: "James L.",
      comment:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ];

  return (
    <section className="p-10 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 ">
        OUR HAPPY CUSTOMERS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-yellow-500 text-xl mb-3">{review.stars}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {review.name}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomersReview;

