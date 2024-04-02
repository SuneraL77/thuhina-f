import { ActionIcon, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { Outlet } from 'react-router-dom'
import SideBar from '../sidebar/SideBar'


const AdminLayout = () => {

    const [opened, { open, close }] = useDisclosure(false);
    
  return (
    <>
      <main>
 

        <div className='flex flex-col w-full md:flex-row '>
          <div className='flex flex-col justify-end w-full p-3 md:hidden'>
            <div className='flex justify-between w-full'> 
            <h1 className='text-xl font-bold text-[#D5BD81] uppercase'>Thuhina Admin</h1>
            <ActionIcon variant="subtle">
              <AiOutlineMenuFold size={30} onClick={open} className='text-black'/>
            </ActionIcon>
            </div>

            <div className='w-full'>
              <Drawer
                opened={opened}
                onClose={close}
                title={<h1 className='text-xl font-bold text-[#D5BD81] uppercase'>Thuhina Admin</h1>}
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
                size="80%"
                position="left"
              >
                <div className='flex items-center w-full mt-10'>
                <SideBar/>
                </div>
              </Drawer>
            </div>
          </div>
          <div className='flex-col hidden h-full gap-10 py-10 lg:w-1/5 md:flex md:w-1/4'>
            <div className='flex flex-col items-center w-full gap-2'>
           
              <div className='flex flex-col items-center w-full'>
                <h1 className='text-xl font-bold text-[#D5BD81] uppercase'>Thuhina Admin</h1>
                
              </div>
            </div>
            <SideBar />

             

          </div>
          <div className='w-full md:w-3/4 bg-[#eaeaea]   p-3 md:p-10 lg:w-4/5'>
            <Outlet />
          </div>
        </div>
 
      </main>
    </>
  )
}

export default AdminLayout