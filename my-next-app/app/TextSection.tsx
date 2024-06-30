'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

interface Props {
    children: React.ReactNode;
}

const TextWrapper = ({ children }: Props) => {
    const text = React.useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: text,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
    const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
    const colorChange = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [
        '#05000a4c',
        '#310a655d',
        '#59169c',
        '#917dc1',
        '#dedce5',
        '#ffffff'
    ]);

    return (
        <div
            ref={text}
            className='text-4xl font-[900] py-2'>
            <motion.div style={{
                transition: 'all 0.2s ease',
                opacity,
                x,
                color: colorChange
            }}>
                {children}
            </motion.div>


        </div>
    )
}

export default function TextSection() {
    return (
        <div>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            </TextWrapper>

        </div>
    )
}
