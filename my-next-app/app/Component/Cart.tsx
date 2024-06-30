"use client"
import Image from 'next/image'
import React from 'react'

interface CartProps {
    title: string,
    img?: string,
    description?: string
}

export default function Cart({ title, img, description }: CartProps) {
    return (
        <div className='border w-full rounded-lg p-2 border-[#80808033]'>
            <Image
                className='w-full h-[300px] object-cover object-center rounded-lg'
                src={img}
                alt='cart image'
                width={300}
                height={300}
            />
            <div className="p-2">
                <h1 className="text-lg font-semibold text-primary mt-3">
                    {title}
                </h1>
                <p className="text-sm text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    )
}

export function CartContainer({ carts }: { carts: CartProps[] }) {
    return (
        <div>


            <div className="grid grid-cols-5 gap-[4rem]">
                {carts.map((cart, index) => (
                    <div className='flex-none  w-[300px]' key={index}>
                        <Cart key={index} {...cart} />
                    </div>
                ))}
            </div>
        </div>
    )
}
