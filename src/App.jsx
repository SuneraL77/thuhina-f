import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GuestLayout from "./components/layouts/GuestLayout";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MyProfile from "./pages/user/MyProfile";
import Advertisement from "./pages/advertisement/Advertisement";
import AddAdvertisement from "./pages/advertisement/AddAdvertisement";
import SingleView from "./pages/Single_view";
import EditAdvertisement from "./pages/advertisement/EditAdvertisement";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages";
import Blogs from "./pages/blog/Blogs";
import BlogsSingle from "./pages/blog/BlogsSingle";
import Magazine from "./pages/magazine/Magazine";
import Message from "./pages/user/Message";
import MyPackages from "./pages/user/MyPackages";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

import AdminLayout from "./components/layouts/AdminLayout";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import UserManagement from "./pages/admin/user/UserManagement";
import SignIn from "./pages/admin/signin/SignIn";
import AdManagement from "./pages/admin/ads/AdManagement";
import PackagesManagement from "./pages/admin/packages/PackagesManagement";
import AddNewPackage from "./pages/admin/packages/AddNewPackage";
import DeletePackage from "./pages/admin/packages/DeletePackage";
import PaymentHistory from "./pages/admin/payment/PaymentHistory";
import BlogManagement from "./pages/admin/blogs/BlogManagement";
import AddNewBlog from "./pages/admin/blogs/AddNewBlog";
import UpdateBlog from "./pages/admin/blogs/UpdateBlog";
import MagazineManagement from "./pages/admin/magazine/MagazineManagement";
import AddNewMagazine from "./pages/admin/magazine/AddNewMagazine";
import UpdateMagazine from "./pages/admin/magazine/UpdateMagazine";
import AdminMessage from "./pages/admin/message/Message";
import TopAds from "./pages/admin/topAd/TopAds";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="" element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/advertisement" element={<Advertisement />} />
            <Route
              path="/advertisement/add_new"
              element={<AddAdvertisement />}
            />
            <Route path="/advertisement/edit" element={<EditAdvertisement />} />
            <Route path="/single" element={<SingleView />} />
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

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/user_management" element={<UserManagement />} />
            <Route path="/admin/ad_management" element={<AdManagement />} />
            <Route path="/admin/topads" element={<TopAds />} />
            <Route
              path="/admin/package_management"
              element={<PackagesManagement />}
            />
            <Route
              path="/admin/package_management/add_new"
              element={<AddNewPackage />}
            />
            <Route
              path="/admin/package_management/delete"
              element={<DeletePackage />}
            />
            <Route path="/admin/payment_history" element={<PaymentHistory />} />
            <Route
              path="/admin/blogs_management"
              element={<BlogManagement />}
            />
            <Route
              path="/admin/blogs_management/add_new"
              element={<AddNewBlog />}
            />
            <Route
              path="/admin/blogs_management/update"
              element={<UpdateBlog />}
            />
            <Route
              path="/admin/Magazines_management"
              element={<MagazineManagement />}
            />
            <Route
              path="/admin/Magazines_management/add_new"
              element={<AddNewMagazine />}
            />
            <Route
              path="/admin/Magazines_management/update"
              element={<UpdateMagazine />}
            />
            <Route path="/admin/messages" element={<AdminMessage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
