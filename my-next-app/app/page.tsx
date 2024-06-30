'use client'

import React from 'react';
import Header from "./Component/Header/Header";
import SectionLayout from "./Component/SectionLayout";
import { cards } from '../app/utils/Cart';
import Cart, { CartContainer } from "./Component/Cart";
import FullPage from "./Component/FullPage";
import TextSection from "./TextSection";
import ZoomSection from './Component/ZoomSection';
import HorizontalWrapper from "./Component/HorizontalWrapper";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const videoRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.65, 0], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1, 6, 9], [1, 0.6, 0.6, 0]);

  return (
    <div className="">
      <Header />
      <div>
        <h1 className="text-4xl font-bold text-center">Our Service</h1>
        <p className="text-gray-500 text-sm text-justify w-[600px] mt-3 m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dignissimos quidem distinctio autem. Animi alias tenetur nobis nemo ut hic neque doloribus blanditiis pariatur est omnis, autem tempora molestiae voluptatum.
        </p>
        <HorizontalWrapper height="40rem" direction={-1400}>
          <CartContainer carts={cards} />
        </HorizontalWrapper>
      </div>
      <FullPage />
      <div className="mt-16">
        <HorizontalWrapper height="40rem" direction={1400}>
          <CartContainer carts={cards} />
        </HorizontalWrapper>
      </div>
      <SectionLayout>
        <TextSection />
      </SectionLayout>
      <SectionLayout>
        <motion.div
          style={{
            opacity,
            scale
          }}
          ref={videoRef}
        >
          <iframe
            className="w-full h-[52rem]"
            src="https://www.youtube.com/embed/T6tc7TT13is?si=4wO42xBe9Hep1J_C"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </motion.div>
      </SectionLayout>
      <SectionLayout>
        <ZoomSection />
      </SectionLayout>
      <SectionLayout>
        <TextSection />
      </SectionLayout>

    </div>
  );
}
