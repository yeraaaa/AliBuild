"use client";

import Image from 'next/image';
import Link from 'next/link';
import CustomFilter from './CustomFilter';
import SearchBar from './SearchBar';
import { location } from '@/constants';
import { CustomButton } from '.';

const Catalogue = () => {
  const handleScroll = () => {
        
  }

  return (
    <div>
        <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-6xl font-extrabold">Apartaments Catalogue</h1>
          <p>Explore the best apartaments for you</p>
        </div>
      </div>

      <div className='home__filters z-10'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='Location' options={location} />
          </div>
        </div>

      <div className="flex flex-row justify-center space-x-5 mt-16">
            <div className="bg-[#5159bb] w-[300px] text-center h-[350px] rounded-xl text-black flex flex-col items-center">
              <div className='relative mb-4'>
                <Image src="/pic1.jpg" alt='photo' width={240} height={160} className="rounded-xl mt-6" />
              </div>
                <div className="font-bold text-2xl">Al-Farabi St.</div>
              <h4 className="font-semibold text-base">Premium apartments.</h4>   
              <Link href="./" className='w-[160px] h-[55px] mt-2 rounded-full'>
                    <CustomButton 
                        title="Place Order"
                        containerStyles="bg-[#fff] text-black rounded-full w-full h-full font-bold"
                        handleClick={handleScroll}
                    />
              </Link>
            </div>

            <div className="bg-[#5159bb] w-[300px] text-center h-[350px] rounded-xl text-black flex flex-col items-center">
              <div className='relative mb-4 '>
                <Image src="/pic2.jpg" alt='photo' width={240} height={160} className="rounded-xl mt-6" />
              </div>
                <div className="font-bold text-2xl">KazakhFilm</div>
              <h4 className="font-semibold text-base">Best for happy and big families.</h4>
              <Link href="./" className='w-[160px] h-[55px] mt-2 rounded-full'>
                    <CustomButton 
                        title="Place Order"
                        containerStyles="bg-[#fff] text-black rounded-full w-full h-full font-bold"
                        handleClick={handleScroll}
                    />
              </Link>     
            </div>

            <div className="bg-[#5159bb] w-[300px] text-center h-[350px] rounded-xl text-black flex flex-col items-center">
              <div className='relative mb-4 '>
                <Image src="/pic3.jpg" alt='photo' width={240} height={160} className="rounded-xl mt-6"/>
              </div>
              <div className="font-bold text-2xl">Zharokov St.</div>
              <h4 className="font-semibold text-base">High quality business apartments.</h4>
              <Link href="./" className='w-[160px] h-[55px] mt-2 rounded-full'>
                    <CustomButton 
                        title="Place Order"
                        containerStyles="bg-[#fff] text-black rounded-full w-full h-full font-bold"
                        handleClick={handleScroll}
                    />
              </Link>   
            </div>

            <div className="bg-[#5159bb] w-[300px] text-center h-[350px] rounded-xl text-black flex flex-col items-center">
              <div className='relative mb-4 '>
                <Image src="/pic4.jpg" alt='photo' width={240} height={160} className="rounded-xl mt-6" />
              </div>
              <div className="font-bold text-2xl">Gagarin St.</div>
              <h4 className="font-semibold text-base">For better life with all needs nearby.</h4>
              <Link href="./" className='w-[160px] h-[55px] mt-2 rounded-full'>
                    <CustomButton 
                        title="Place Order"
                        containerStyles="bg-[#fff] text-black rounded-full w-full h-full font-bold"
                        handleClick={handleScroll}
                    />
              </Link> 
            </div>
      </div>
    </div>
  )
}

export default Catalogue