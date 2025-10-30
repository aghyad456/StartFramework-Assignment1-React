import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/Footer'

export default function MainLayout() {
  return <>
     <Navbar />
     <Outlet />
     {
    <footer className="footer text-center text-white ">
        <div className="container py-5">
            <div className="row">
                <Footer />
            </div>
        </div>
        <div className="footer-bottom ">
          <p className="m-0 p-4">Copyright © Your Website 2021</p>
        </div>
    </footer>
    }
  </>
}
