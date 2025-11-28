import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  IoIosArrowDown,
  IoMdCheckmark,
  IoMdCheckmarkCircle,
} from "react-icons/io";
import { RiAlignVertically } from "react-icons/ri";
import Button from "../../../../shared/Button";

const RateReview = () => {
  const reviews = [
    {
      id: 1,
      stars: "⭐⭐⭐",
      name: "Samantha D.",
      comment:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      date: "Posted on August 14, 2023",
    },
    {
      id: 2,
      stars: "⭐⭐⭐",
      name: "Alex M.",
      comment:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      date: "Posted on August 15, 2023",
    },
    {
      id: 4,
      stars: "⭐⭐⭐",
      name: "Ethan R.",
      comment:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      date: "Posted on August 16, 2023",
    },
    {
      id: 5,
      stars: "⭐⭐⭐",
      name: "Olivia P.",
      comment:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      date: "Posted on August 17, 2023",
    },
    {
      id: 6,
      stars: "⭐⭐⭐",
      name: "Liam K.",
      comment:
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      date: "Posted on August 18, 2023",
    },
    {
      id: 7,
      stars: "⭐⭐⭐",
      name: "Ava H.",
      comment:
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      date: "Posted on August 19, 2023",
    },
  ];
  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center ">
          <div className="font-semibold text-lg p-4">All Reviews</div>
          <div className="flex gap-3  mb-5 items-center">
            <RiAlignVertically className="text-2xl bg-[#F0F0F0] w-[4rem] rounded-full py-5 text-white  " />
            <div>
              <p className="cursor-pointer flex items-center gap-1 bg-[#F0F0F0] rounded-full px-3 py-2 w-[7rem]">
                Latest <IoIosArrowDown className="text-2xl" />
              </p>
            </div>
            <p className="rounded-full px-5 py-2 w-[10rem] bg-[black]  text-white">
              Write a Review
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-4 ">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white  rounded-xl border border-gray-200 p-6  hover:shadow-lg transition-shadow duration-300"
            >
              <div className=" text-xl mb-3 flex justify-between ">
                {review.stars}
                <div>
                  {" "}
                  <BsThreeDots />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center gap-2">
                {review.name}
                <IoMdCheckmark className="bg-[#4ab04a] text-white rounded-full" />
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                {review.comment}
              </p>
              <p className="text-gray-600  text-sm">{review.date}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          {" "}
          <Button className="border    p-2 text-md rounded-full hover:bg-gray-300 text-black mt-7 ">
            Load More Reviews
          </Button>
        </div>
      </div>
    </>
  );
};

export default RateReview;
