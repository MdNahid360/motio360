"use client"

import Image from 'next/image'
import React from 'react'
import imgSrc from '../../public/images/3d6.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FullPage() {
    const secRef = React.useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: secRef,
        offset: ['start end', 'end start']
    })

    const scale = useTransform(scrollYProgress, [0, 0.2], [0, 1.1]);
    const xTransform = useTransform(scrollYProgress, [1, 0.2, 0.1, 0], [-1000, 0, 0, 0]);

    return (
        <div ref={secRef}>
            <motion.div
                className='border  rounded overflow-hidden p-2'
                style={{
                    position: 'relative',
                    height: '700px',
                    width: 'calc(100% - 10rem)',
                    margin: 'auto',
                    transition: 'all 0.4s linear',
                    scale,
                    x: xTransform
                }}>
                <Image
                    src={imgSrc}
                    alt='vct'
                    fill={true}
                    className='object-cover m-auto top-0 left-0 right-0 bottom-0 absolute'
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        border: '1px solid indigo',
                        transition: 'border 0.3s eas '
                    }}
                />
            </motion.div>
        </div>
    )
}
