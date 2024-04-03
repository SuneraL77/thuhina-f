import { Button } from "@mantine/core";
import React from "react";
import { MdOutlineDone } from "react-icons/md";

const NormalPackageCard = ({ packge, updateStatus }) => {
  console.log(packge);
  const descriptionLines = packge.desciription.split("\n");

  return (
    <div className="flex flex-col justify-between w-full gap-3 p-5 text-center duration-300 bg-white shadow-xl rounded-xl hover:scale-105">
      <span className="text-lg">{packge.name}</span>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-medium">Rs. {packge.price}</h1>
        <span className="text-xs">Per Month</span>
      </div>
      <div className="flex flex-col px-6 text-start">
        {descriptionLines.map((line, index) => (
          <div key={index} className="flex items-center gap-2">
            <MdOutlineDone className="text-green-500" />
            <span>{line}</span>
          </div>
        ))}
      </div>
      <div className="w-full">

        {packge.view ? (     <Button variant="outline" className="bg-red-500" onClick={() =>  updateStatus(packge._id,false)}>
          Deactivate
        </Button>) :   (     <Button variant="outline" className="bg-red-500" onClick={() =>  updateStatus(packge._id,true)}>
          Active
        </Button>)}
   
      </div>
    </div>
  );
};

export default NormalPackageCard;
