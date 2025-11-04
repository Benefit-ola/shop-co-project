import React from "react";
import { image1, image2, image3, image4 } from "../../../constant";

const BrowseList = () => {
  const browseItems = [
    { id: 1, text: "sdsd", image: image1 },

    { id: 2, text: "dds", image: image2 },
    {
      id: 3,
      text: "",
      image: image3,
    },
    {
      id: 4,
      text: "gsd",
      image: image4,
    },
  ];
  return(  
 <>
 <div>
    
      <div className="grid grid-row-4 gap-4 mt-10  text-center ">
          {browseItems.map((item, index) => (
            <div key={index} className="">
              <img src={item.image} alt={item.text} className="mb-4" />
              <h3 className="font-semibold mb-2">{item.text}</h3>
            </div>
          ))}
        </div>
    
 </div>

  </>

  )

};

export default BrowseList;
