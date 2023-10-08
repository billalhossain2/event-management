import React from "react";

const OfferCard = ({item}) => {
    const {image, serviceName, description} = item || {};
  return (
    <div className="border-[1px] border-solid border-gray-400 rounded-lg p-3 flex flex-col justify-between">
      <img className="h-[200px]" src={image} alt="" />
      <h3 className="font-bold md:text-2xl text-xl">{serviceName}</h3>
      <p>{description}</p>
    </div>
  );
};

export default OfferCard;
