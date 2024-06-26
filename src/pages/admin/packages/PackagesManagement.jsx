import { Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import Bg_top from "../../../assets/images/bg_image_top.png";
import Bg_bottom from "../../../assets/images/bg_image_bottom.png";
import NormalPackageCard from "../../../components/cards/NormalPackageCard";
import PopularPackageCard from "../../../components/cards/PopularPackageCard";
import { Link } from "react-router-dom";
import { packageStatus, showPakages } from "../../../functions/addPakckge";
import toast from "react-hot-toast";

const PackagesManagement = () => {
  const [packges, setPackges] = useState([]);

  useEffect(() => {
    showPakges();
  }, []);
  const showPakges = async () => {
    const response = await showPakages();
    setPackges(response);
    showPakages();
  };

  const updateStatus = async (pakageId, status) => {
    const response = await packageStatus(pakageId, status);
    toast.success(response.message);
  };
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-xl font-medium">Packages</h1>

      <div className="flex justify-end gap-3">
        <Link to="/admin/package_management/add_new">
          <Button color="green">Add New Package</Button>
        </Link>
        <Link to="/admin/package_management/delete">
          <Button color="red">Delete Package</Button>
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        <span>Current Packages</span>
        <div className="flex justify-center w-full">
          <div className="rounded-lg shadow-lg  flex bg-[#F9F9F9] md:relative justify-between lg:w-4/5 w-full">
            <img src={Bg_top} alt="/" className="hidden md:flex" />
            <img src={Bg_bottom} alt="/" className="hidden md:flex" />
            <div className="top-0 left-0 grid justify-center w-full h-full grid-cols-1 gap-10 p-10 md:absolute md:grid-cols-3">
              {packges.map((c) => (
                <NormalPackageCard
                  key={c._id}
                  packge={c}
                  updateStatus={updateStatus}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesManagement;
