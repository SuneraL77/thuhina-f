import React, { useState } from "react";
import Header from "../../components/nav/Header";
import Bg_top from "../../assets/images/bg_image_top.png";
import Bg_bottom from "../../assets/images/bg_image_bottom.png";
import { Button, Modal, Radio } from "@mantine/core";
import { FaPhone } from "react-icons/fa6";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { Badge, Avatar } from "antd";
import axios from "axios";
import { createAccount } from "../../functions/auth";
import toast from "react-hot-toast";
// import { register } from 'react-scroll/modules/mixins/scroller'

const Register = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [first_name, setFisrtName] = useState("");
  const [last_name, setLastname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirtDay] = useState("");
  const [gender, setGender] = useState("");
  const [idImg, setIdImg] = useState([]);
const [password,setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // const submit = async () =>{
  //     const response = await register(first_name,last_name,mobile,email,bithday,gender)


  const sumit = async () => {
const response = await createAccount( first_name,last_name, email, mobile,mobile,idImg, gender, password)
toast
  }
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleCloudinaryUpload = async (e, index) => {
    const files = e.target.files;

    const base64Images = await Promise.all(
      Array.from(files).map((file) => convertBase64(file))
    );

    try {
      setLoading(true);
      const responses = await Promise.all(
        base64Images.map((base64) =>
          axios.post(`${process.env.REACT_APP_API}/user/uploadimag`, {
            image: base64,
          })
        )
      );
      setLoading(false);

      const newVariants = [];
      responses.forEach((response, i) => {
        newVariants.push({
          imageUrl: response.data.url,
          publicId: response.data.public_id,
        });
      });
      setIdImg(newVariants);

      console.log(newVariants);
    } catch (error) {
      console.log("Error uploading image to Cloudinary:", error);
    }
  };

  const removeCloudinaryUpload = async (public_id) => {
    try {
      setLoading(true);
      await axios.post(`${process.env.REACT_APP_API}/user/removeImg`, {
        public_id,
      });
      setLoading(false);

      const newVariants = idImg.filter((image) => image.publicId !== public_id);
      setIdImg(newVariants);
    } catch (error) {
      console.log("Error removing image from Cloudinary:", error);
    }
  };

  return (
    <>
      <Header />

      <div className="flex flex-col justify-between w-full gap-10">
        <div className="flex flex-col gap-3 py-5 text-center w-full bg-[#D5BD81] javanese_font">
          <span className="text-lg text-white">Welcome to</span>
          <h1 className="text-3xl text-white ">Thihina Mangala Sewaya</h1>
        </div>

        <div className="flex justify-center w-full">
          <div className="relative rounded-lg shadow-lg  flex bg-[#F9F9F9] h-full  justify-between lg:w-1/2 w-full md:w-4/5">
            <img src={Bg_top} alt="/" className="absolute top-0 left-0" />
            <img
              src={Bg_bottom}
              alt="/"
              className="absolute bottom-0 right-0"
            />

            <div className="z-50 flex flex-col w-full h-full gap-5 py-10">
              <h1 className="text-[#3B3B3B] text-center text-2xl font-medium">
                Create Account
              </h1>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 px-3">
                  <span className="text-[#3B3B3B]">First Name</span>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b outline-none"
                    placeholder="Ex: Malindu"
                    value={first_name}
                    onChange={(e) => setFisrtName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 px-3">
                  <span className="text-[#3B3B3B]">Last Name</span>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b outline-none"
                    placeholder="Ex: Ishan"
                    value={last_name}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 px-3">
                  <span className="text-[#3B3B3B]">Mobile Number</span>
                  <div className="flex gap-5">
                    <input
                      type="text"
                      className="w-full bg-transparent border-b outline-none"
                      placeholder="Ex: +94 71 23 45 678"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 px-3">
                  <span className="text-[#3B3B3B]">Email Address</span>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b outline-none"
                    placeholder="Ex: malindu@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 px-3">
                  <span className="text-[#3B3B3B]">Birthday</span>
                  <input
                    className="w-full bg-transparent border-b outline-none"
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirtDay(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2 px-3">
                  <span className="text-[#3B3B3B]">Gender</span>

                  <div className="flex gap-5">
                    <Radio
                      value="Male"
                      label="Male"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <Radio
                      value="Female"
                      label="Female"
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 px-3">
                  <span className="text-[#3B3B3B]">
                    Upload Your Identity Card Images
                  </span>

                  {idImg.map((image) => (
                    <Badge
                      count="x"
                      style={{ cursor: "pointer" }}
                      className="mb-3"
                      onClick={() => removeCloudinaryUpload(image.publicId)}
                    >
                      <Avatar
                        key={image.publicId}
                        src={image.imageUrl}
                        size={350}
                        shape="square"
                      />
                    </Badge>
                  ))}
                  <div className="flex gap-5 text-white">
                    <div>
                      <input
                        type="file"
                        name="id"
                        id="id"
                        onChange={(e) => handleCloudinaryUpload(e)}
                        hidden
                      />
                      <label
                        htmlFor="id"
                        className="py-[10px] px-[40px] bg-[#f05206] hover:bg-[#f03d06] w-fit text-white rounded-md cursor-pointer "
                      >
                        {" "}
                        upload Id
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-full mt-6">
                  <div className="w-1/3 md:w-1/5">
                    <Button
                      variant="filled"
                      color="#D5BD81"
                      className="text-black"
                    >
                      Create Account
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center w-full px-3">
                  <div
                    className="flex bg-[#D5BD81] gap-3 px-10 md:w-2/3 w-full py-2 items-center justify-center lg:w-1/2"
                    onClick={open}
                  >
                    <FaPhone />
                    <span className="font-bold">
                      Call Us To Create Your Account
                    </span>
                  </div>
                </div>

                  <div className="flex flex-col gap-2 px-3">
                  <span className="text-[#3B3B3B]">Birthday</span>
                  <input
                    className="w-full bg-transparent border-b outline-none"
                    type="date"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <Modal opened={opened} onClose={close} title="Contact Us">
                  <h1>+94 77 55 66 345</h1>
                </Modal>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full py-5 text-center text-[#595959]">
          <span className="">By signing up you are agreeing to our</span>
          <div className="flex justify-center w-full gap-1 text-center">
            <Link to="/privacy">
              <span>Privacy Policy </span>
            </Link>
            <span>and</span>
            <Link to="/terms&conditions">
              <span>Terms of Use.</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
