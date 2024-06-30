'use client'

import { Interface } from "readline";
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from "react";
import { dir } from "console";
interface Props {
    children: React.ReactNode;
    direction: number;
    height: string;
}
export default function HorizontalWrapper({ children, height, direction }: Props) {
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"]
    });

    const xTransform = useTransform(scrollYProgress, [0, 0.1, 1], [0, 0, direction])
    return (
        <div>

            <div
                className="flex items-center "
                ref={scrollRef}>
                <motion.div
                    style={{
                        height: height,
                        zIndex: 6,
                        position: "relative",
                        transition: 'all 0.5s ease',
                        translateX: xTransform
                    }}
                    className="pt-12">

                    {children}
                </motion.div>
            </div>
        </div>
    );
}