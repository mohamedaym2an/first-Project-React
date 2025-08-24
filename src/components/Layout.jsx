import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useLocation } from "react-router-dom";

export default function Layout() {
    const { pathname } = useLocation();
    return (
        <>
            <Navbar />
            <div
                className={`min-h-dvh flex justify-center items-center ${pathname === "/start" || pathname === "/about" ? "bg-[#1ABC9C]" : ""
                    }`}
            >
                <div className="container text-center mb-0"> <Outlet /> </div>
            </div>
            <Footer />
        </>
    )
}
