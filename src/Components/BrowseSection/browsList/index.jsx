import React from "react";
import { image1, image2, image3, image4 } from "../../../constant";

const BrowseList = () => {
  return (
    <>
      <div>
        <div className="  text-center bg-[#F0F0F0] p-[2rem] m-[4rem] rounded-3xl">
          <h2 className=" md:text-4xl text-2xl  font-extrabold mb-4 mt-3 ">
            BROWSE BY DRESS STYLE
          </h2>
          <div className="">
          
            <div className="md:flex flex-cols-1  gap-5  ">
              <div className="relative">
              <div> <img src={image1} alt="" className="rounded-xl mb-5" />
              <p className="font-bold  text-lg absolute  top-4 left-6">Casual</p>
              </div>
              
              </div>
              
              <div className="relative">
                
                 <img src={image2} alt="" className="rounded-xl" />
              <div>
                <p className="font-bold  text-lg absolute top-4 left-6">Formal</p>
              </div>
              </div>
             
            </div>
            <div className="md:flex gap-5 flex-cols-1  mt-4">
              <div className="relative">
                <img src={image3} alt="" className="rounded-xl" />
                <p className="font-bold text-lg absolute top-4 left-6">Party</p>
              </div>
              <div className="relative"><img src={image4} alt=""  className="rounded-xl mt-5" />
              <p className="font-bold text-lg absolute top-4 left-6">Gym</p>
              </div>
              
            </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default BrowseList;
