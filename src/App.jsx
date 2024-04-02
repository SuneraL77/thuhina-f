import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GuestLayout from './components/layouts/GuestLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MyProfile from './pages/MyProfile';
import Advertisement from './pages/Advertisement';
import AddAdvertisement from './pages/AddAdvertisement';
import Single_view from './pages/Single_view';
import EditAdvertisement from './pages/EditAdvertisement';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import Blogs from './pages/Blogs';
import BlogsSingle from './pages/BlogsSingle';
import Magazine from './pages/Magazine';
import Message from './pages/Message';
import MyPackages from './pages/MyPackages';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';


import AdminLayout from './components/layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import SignIn from './pages/admin/SignIn';
import AdManagement from './pages/admin/AdManagement';
import PackagesManagement from './pages/admin/PackagesManagement';
import AddNewPackage from './pages/admin/AddNewPackage';
import DeletePackage from './pages/admin/DeletePackage';
import PaymentHistory from './pages/admin/PaymentHistory';
import BlogManagement from './pages/admin/BlogManagement';
import AddNewBlog from './pages/admin/AddNewBlog';
import UpdateBlog from './pages/admin/UpdateBlog';
import MagazineManagement from './pages/admin/MagazineManagement';
import AddNewMagazine from './pages/admin/AddNewMagazine';
import UpdateMagazine from './pages/admin/UpdateMagazine';
import AdminMessage from './pages/admin/Message';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path='' element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/advertisement" element={<Advertisement />} />
            <Route path="/advertisement/add_new" element={<AddAdvertisement />} />
            <Route path="/advertisement/edit" element={<EditAdvertisement />} />
            <Route path="/single" element={<Single_view />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/single" element={<BlogsSingle />} />
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/message" element={<Message />} />
            <Route path="/mypackages" element={<MyPackages />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms&conditions" element={<Terms />} />
          </Route>

          <Route path="/admin/signin" element={<SignIn />} />

          <Route path='/admin' element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/user_management" element={<UserManagement />} />
            <Route path="/admin/ad_management" element={<AdManagement/>} />
            <Route path="/admin/package_management" element={<PackagesManagement/>} />
            <Route path="/admin/package_management/add_new" element={<AddNewPackage/>} />
            <Route path="/admin/package_management/delete" element={<DeletePackage/>} />
            <Route path="/admin/payment_history" element={<PaymentHistory/>} />
            <Route path="/admin/blogs_management" element={<BlogManagement/>} />
            <Route path="/admin/blogs_management/add_new" element={<AddNewBlog/>} />
            <Route path="/admin/blogs_management/update" element={<UpdateBlog/>} />
            <Route path="/admin/Magazines_management" element={<MagazineManagement/>} />
            <Route path="/admin/Magazines_management/add_new" element={<AddNewMagazine/>} />
            <Route path="/admin/Magazines_management/update" element={<UpdateMagazine/>} />
            <Route path="/admin/messages" element={<AdminMessage/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
