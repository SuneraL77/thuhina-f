import { Button, Textarea } from "@mantine/core";
import React, { useState } from "react";
import { createPakage } from "../../../functions/addPakckge";
import toast from "react-hot-toast";


const AddNewPackage = () => {
  const [packageName, setPackageName] = useState("");
  const [days, setDays] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submit = async () => {
    const response = await createPakage(packageName, days, price, description);
    toast.success(response.message);
    setPackageName('');
    setDays('');
    setPrice('');
    setDescription('')
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-medium">Packages</h1>
      <span>Add New Package</span>
      <div className="flex flex-col w-full gap-5 lg:w-2/3">
        <input
          label="Package Name"
          placeholder="Eg: Basic"
          value={packageName}
          onChange={(e) => setPackageName(e.target.value)}
        />
        <input
          label="Package Price"
          placeholder="Eg: 2000 LKR"
          value={price}
          type="Number"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          label="Package Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          placeholder="Eg: 30"
        />
        <Textarea
          label="Package Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <div className="flex justify-end">
          <Button onClick={submit} color="#D5BD81">
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddNewPackage;
