import { useState } from 'react';
import { Box, NavLink } from '@mantine/core';
import { Link } from 'react-router-dom';
import { AiOutlineDashboard } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import { BsJournalBookmark } from "react-icons/bs";
import { RiAdvertisementLine } from "react-icons/ri";
import { LuPackage } from "react-icons/lu";
import { BsPencilSquare } from "react-icons/bs";
import { LuNewspaper } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

const data = [
  {
    id:1,
    label:
      <Link to='/admin/dashboard'>
        <div className='flex items-center gap-5 py-2'>
          <AiOutlineDashboard size={20} />
          <span className='text-lg lg:text-lg md:text-base '>Dashboard</span>
        </div>
      </Link>,
  },
  {
    id:2,
    label:
    <Link to='/admin/user_management'>
      <div className='flex items-center gap-5 py-2'>
        <TbUsers size={20} />
        <span className='text-lg lg:text-lg md:text-base'>User Management</span>
      </div>
    </Link>,
  },
  {
    id:3,
    label:
    <Link to='/admin/payment_history'>
      <div className='flex items-center gap-5 py-2'>
        <BsJournalBookmark size={20} />
        <span className='text-lg lg:text-lg md:text-base'>Payment History</span>
      </div>
    </Link>,
  },
  {
    id:4,
    label:
    <Link to='/admin/ad_management'>
      <div className='flex items-center gap-5 py-2'>
        <RiAdvertisementLine size={20} />
        <span className='text-lg lg:text-lg md:text-base'>Ads Management</span>
      </div>
    </Link>,
  },
  {
    id:5,
    label:
    <Link to='/admin/topads'>
      <div className='flex items-center gap-5 py-2'>
        <RiAdvertisementLine size={20} />
        <span className='text-lg lg:text-lg md:text-base'>Top Ads</span>
      </div>
    </Link>,
  },
  {
    id:6,
    label:
    <Link to='/admin/package_management'>
      <div className='flex items-center gap-5 py-2'>
        <LuPackage size={20} />
        <span className='text-lg lg:text-lg md:text-base'>Packages</span>
      </div>
    </Link>,
  },
  {
    id:7,
    label:
    <Link to='/admin/blogs_management'>
      <div className='flex items-center gap-5 py-2'>
        <BsPencilSquare size={20} />
        <span className='text-lg lg:text-lg md:text-base'>Blogs</span>
      </div>
    </Link>,
  },
  {
    id:8,
    label:
    <Link to='/admin/Magazines_management'>
      <div className='flex items-center gap-5 py-2'>
        <LuNewspaper size={20} />
        <span className='text-lg lg:text-lg md:text-base'>Magazines</span>
      </div>
    </Link>,
  },
  {
    id:9,
    label:
    <Link to='/admin/messages'>
      <div className='flex items-center gap-5 py-2'>
        <MdOutlineMessage size={20} />
        <span className='text-lg lg:text-lg md:text-base'>Messages</span>
      </div>
    </Link>,
  },
  {
    id:10,
    label:
    <Link to='/'>
      <div className='flex items-center gap-5 py-2'>
        <BiLogOut size={20} />
        <span className='text-lg lg:text-lg md:text-base'>Log Out</span>
      </div>
    </Link>,
  },
];


const SideBar = () => {

  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
    
      href="#required-for-focus"
      key={item.id}
      active={index === active}
      label={item.label}
      rightSection={item.rightSection}
      // leftSection={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
      className='hover:text-black hover:bg-[#D5BD81]'

    />
  ));

  return (
    <div className='w-full '>
      <Box className='w-full   text-[#3d3d3d] '>{items}</Box>
    </div>
  )
}

export default SideBar
