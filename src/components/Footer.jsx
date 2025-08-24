import React from 'react'
import { FaInstagram, FaWhatsapp, FaTelegram, FaTwitter } from "react-icons/fa";


export default function Footer() {
    return (
        <>

            <footer className="bg-slate-800 text-white py-10">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Location */}
                    <div>
                        <h3 className="text-xl font-bold mb-3 uppercase">Location</h3>
                        <p>cairo</p>
                        <p>Doki</p>
                    </div>
                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-3 uppercase">Around the Web</h3>
                        <div className="flex justify-center md:justify-start gap-3">
                            <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full text-xl hover:bg-white hover:text-black transition">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full text-xl hover:bg-white hover:text-black transition">
                                <FaWhatsapp />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full text-xl hover:bg-white hover:text-black transition">
                                <FaTelegram />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center border rounded-full text-xl hover:bg-white hover:text-black transition">
                                <FaTwitter /> {/* X سابقًا */}
                            </a>
                        </div>
                    </div>
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-3 uppercase">About Freelancer</h3>
                        <p>
                            Freelance is a free to use, licensed Bootstrap theme created by Route
                        </p>
                    </div>
                </div>

                {/* CopyRight */}
                <div className="bg-slate-900 text-center py-3 mt-8">  <p>Copyright © 2025 Mohamed Ayman. All rights reserved.</p>
                </div>

            </footer>

        </>
    )
}
