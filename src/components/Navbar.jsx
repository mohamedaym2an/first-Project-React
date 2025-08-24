import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


export default function Navbar() {
    const [isSmall, setIsSmall] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSmall(true);
            } else {
                setIsSmall(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return <>
    <div>
  Scroll down to see navbar shrink
</div>

        <nav className={`${isSmall ? "py-3 shadow-md" : "py-6"} bg-[#2C3E50] text-white fixed top-0 left-0 right-0 transition-all duration-300`}
        >

            <div className="container mx-auto flex items-center">
                <h4 className="font-bold text-2xl uppercase ml-4">
                    <Link to={"start"}>Start Framework
                    </Link>
                </h4>
                <ul className="flex gap-6 font-medium text-sm uppercase ml-auto">
                    <li >
                        <NavLink to={"about"} className="px-3 py-2 rounded-lg cursor-pointer">        About
                        </NavLink></li>
                    <li >
                        <NavLink to={"portfolio"} className="px-3 py-2 rounded-lg cursor-pointer">        Portfolio
                        </NavLink></li>
                    <li >
                        <NavLink to={"contact"} className="px-3 py-2 rounded-lg  cursor-pointer">        Contact
                        </NavLink></li>

                </ul>
            </div>
        </nav >
    </>

}
