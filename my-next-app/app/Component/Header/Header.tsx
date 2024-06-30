"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import vct from '../../../public/images/3d1.jpg';
import CommonButton from '../Button/CommonButton';
import { Abril_Fatface } from 'next/font/google';
import hover3d from '../../utils/hover';

const abril = Abril_Fatface({
    subsets: ["latin"],
    weight: '400',
    display: 'swap' // Add display swap for better font loading
});
const Header = () => {
    const [open, setOpen] = useState(false)
    const heroRef = useRef<HTMLDivElement>(null);
    const hoverEffect = hover3d(heroRef, {
        x: 30,
        y: -40,
        z: 30
    });

    const hoverImage = hover3d(heroRef, {
        x: 30,
        y: -5,
        z: 21
    });

    return (
        <div ref={heroRef} className='group'>
            <header className="bg-bg-color border-b border-[#a5a6a71c]">
                <div className="px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between h-[10vh]">
                        <div className="flex-shrink-0">
                            <a href="#" title="" className="flex text-primary font-semibold">
                                <Image className="w-auto h-8 lg:h-10" src={logo} alt="" />
                                <span className='mt-1'>Motion</span>
                                <span className="text-red mt-1">360</span>
                            </a>
                        </div>
                        <div className="md:flex hidden items-center border border-gray-800 rounded w-[400px] h-10 overflow-hidden bg-[#4b59881c]">
                            <input type="text" placeholder='Search' className="w-full h-full px-2 text-sm bg-transparent" />
                        </div>
                        <button
                            onClick={() => setOpen(true)}
                            type="button" className="inline-flex p-2 text-muted transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                        <div className="hidden md:flex md:items-center md:space-x-10">
                            <a href="#" title="" className="text-sm font-medium text-muted transition-all duration-200 lg:text-base hover:text-white focus:text-white hover:scale-[1.2]"> Home </a>
                            <a href="#" title="" className="text-sm font-medium text-muted transition-all duration-200 lg:text-base hover:text-white focus:text-white hover:scale-[1.2]"> Auctions </a>
                            <a href="#" title="" className="text-sm font-medium text-muted transition-all duration-200 lg:text-base hover:text-white focus:text-white hover:scale-[1.2]"> About </a>
                            <CommonButton name="Connect Wallet" border='1px solid gray' color="white" icon="🚀" />
                        </div>
                    </nav>


                    <nav className={`${open ? 'translate-x-[0%]' : 'translate-x-[-120%]'} duration-200 min-h-screen px-4 py-4 text-center bg-black md:hidden fixed z-50 top-0 left-0 w-full`}>
                        <div className="flex items-center justify-between">
                            <div className="flex-shrink-0">
                                <a href="#" title="" className="flex text-primary font-semibold">
                                    <Image className="w-auto h-8 lg:h-10" src={logo} alt="" />
                                    <span className='mt-1'>Motion</span>
                                    <span className="text-red mt-1">360</span>
                                </a>
                            </div>

                            <button
                                onClick={() => setOpen(false)}
                                type="button" className="inline-flex p-2 text-muted transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col items-center mt-10 space-y-2">
                            <a href="#" title="" className="py-2 font-medium text-muted transition-all duration-200 focus:text-white"> Home </a>
                            <a href="#" title="" className="py-2 font-medium text-muted transition-all duration-200 focus:text-white"> Auctions </a>
                            <a href="#" title="" className="py-2 font-medium text-muted transition-all duration-200 focus:text-white"> About </a>
                        </div>
                    </nav>
                </div>
            </header>

            {/* header content */}
            <div className={`px-4 mx-auto max-w-screen-2xl h-[90vh] m-auto sm:px-6 lg:px-8`}>
                <div className="grid md:grid-cols-2 md:gap-0 gap-10 py-[0px] h-full items-center">
                    <div className="">
                        <h1 className={`title text-primary line head-title font-black `}>
                            Buy, collect and sell extraordinary NFTs
                        </h1>
                        <p className="text-md">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod reiciendis labore pariatur facilis repellat cum dolorum quasi dicta nostrum repellendus veritatis ipsum, similique a praesentium officia debitis quas perspiciatis minima?
                        </p>

                        <div className="flex items-center gap-2 mt-12">
                            <CommonButton name="Get Started" bg="indigo" color="white" icon="🚀" />
                            <CommonButton name="Get Started" bg="var(--color-bg)" border='1px solid gray' color="white" icon="🚀" />
                        </div>
                    </div>
                    <div className="flex md:justify-end">
                        <div
                            style={{
                                boxShadow: '',
                                transform: hoverEffect.transform,
                                transition: hoverEffect.transition
                            }}
                            className="border border-[#8080805c] rounded-lg w-[90%] p-4 shadow-2xl shadow-[#0000ff3f]">
                            <Image
                                style={{
                                    transform: hoverImage.transform,
                                    transition: hoverImage.transition
                                }}
                                src={vct} className='w-full rounded-lg' width={600} height={600} alt="3D Visual" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
