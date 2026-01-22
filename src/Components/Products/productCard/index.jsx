import React from "react";

const ProductCard = ({ image, text, stars, price }) => {
  return (
    <>
      <div>
        <div>
          <img src={image} alt="" />
        </div>
        <h3>{text}</h3>
        <p>{stars}</p>
        <h4>${price}</h4>
      </div>
    </>
  );
};

export default ProductCard;
