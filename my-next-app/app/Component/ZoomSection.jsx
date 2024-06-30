'use client';
import React, { useRef } from 'react';
import useHover3d from '../utils/hover';
import Image from 'next/image';
import img1 from '../../public/images/3d1.jpg';
import img2 from '../../public/images/3d8.jpg';
import img3 from '../../public/images/bg2.jpg';
import img4 from '../../public/images/bg3.jpg';

const ZoomSection = () => {
    const myRef = useRef(null);
    const hoverEffect = useHover3d(myRef, {
        x: -5,
        y: 10,
        z: 4
    });

    const hoverEffect2 = useHover3d(myRef, {
        x: 40,
        y: 20,
        z: 7
    });

    const hoverEffect3 = useHover3d(myRef, {
        x: -40,
        y: -20,
        z: -7
    });

    return (
        <div
            ref={myRef}
            className='relative  overflow-hidden border border-[var(--color-border)]'>
            <div
                style={{
                    height: "40rem",
                    width: "100%"
                }}
                className="flex items-center w-full"
            >
                <div className='w-full h-full absolute top-0 left-0 z-1 '
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        transform: hoverEffect.transform,
                        transition: hoverEffect.transition
                    }}
                >
                    <div className="w-full h-full relative">
                        <Image
                            src={img3}
                            alt='image'
                            fill
                            className='w-full h-full'
                            sizes='(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw'

                        />
                        <div className="absolute top-0 bg-gradient-to-r to-[#0b01118a] from-[#010107f5] left-0 rounded overflow-hidden w-full h-full  "></div>
                    </div>
                </div>


                <div className="relative w-full px-[100px] flex items-center gap-4 z-10">
                    <div
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                            transform: hoverEffect2.transform,
                            transition: hoverEffect2.transition
                        }}
                        className='relative duration-200 hover:shadow-xl hover:shadow-[#4c008248] group w-[300px] h-[370px] object-cover overflow-hidden object-center rounded-lg'>
                        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full   flex flex-col justify-between">
                            <div className='text-sm text-white bg-red  group-hover:shadow-lg group-hover:shadow-[#46242f93] w-[50px] h-[25px] flex items-center justify-center rounded-full m-4'>
                                New
                            </div>
                            <div className='p-3 h-[100px] flex flex-col justify-end bg-gradient-to-t to-[#01000200] from-[#000000e1] '>
                                <h1 className='text-2xl font-semibold text-white'>Hello Dear....</h1>
                            </div>
                        </div>
                        <Image

                            className='w-full h-full object-cover object-center'
                            src={img1} alt='image' />

                    </div>
                    <div
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                            transform: hoverEffect3.transform,
                            transition: hoverEffect3.transition
                        }}
                        className='relative duration-200 hover:shadow-xl hover:shadow-[#4c008248] group w-[300px] h-[370px] object-cover overflow-hidden object-center rounded-lg'>
                        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full   flex flex-col justify-between">
                            <div className='text-sm text-white bg-red  group-hover:shadow-lg group-hover:shadow-[#46242f93] w-[50px] h-[25px] flex items-center justify-center rounded-full m-4'>
                                New
                            </div>
                            <div className='p-3 h-[100px] flex flex-col justify-end bg-gradient-to-t to-[#01000200] from-[#000000e1] '>
                                <h1 className='text-2xl font-semibold text-white'>Hello Dear....</h1>
                            </div>
                        </div>
                        <Image

                            className='w-full h-full object-cover object-center'
                            src={img2} alt='image' />

                    </div>


                </div>
            </div>
        </div>
    );
};

export default ZoomSection;
