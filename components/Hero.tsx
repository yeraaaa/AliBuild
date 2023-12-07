"use client";

import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => {
        
    }

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">Comfrortable and restful apartaments for you</h1>

                <p className="her0__subtitle">Make the right choice for your bright future.</p>

                <Link href="./apartments" className='w-[100px]'>
                    <CustomButton 
                        title="Explore"
                        containerStyles="bg-[#5159bb] text-white rounded-full mt-10 hover:bg-[#3a41c6] transition-[5s]"
                        handleClick={handleScroll}
                    />
                </Link>
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.svg" alt="hero" fill className="object-contain"/>
                </div>
                    <div className="hero__image-overlay" />
            </div>
        </div>
    )
}

export default Hero