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
    <div className="mt-12 px-4 sm:px-8 max-w-[1440px] mx-auto" id="discover">
        <div className="home__text-container text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">Apartments Catalogue</h1>
            <p className="text-base sm:text-lg">Explore the best apartments for you</p>
        </div>
    </div>

    <div className='home__filters z-10 px-4 sm:px-8 mt-4 sm:mt-8'>
        <SearchBar />

        <div className='home__filter-container mt-4 sm:mt-6'>
            <CustomFilter title='Location' options={location} />
        </div>
    </div>

    <div className='flex items-center'>
      <h2 className=''>Almaty</h2>
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-5 mt-8 sm:mt-16">
          <div className="bg-[#5159bb] w-full sm:w-[300px] text-center h-[350px] rounded-xl text-black flex flex-col items-center mb-8 sm:mb-0">
              <div className='relative mb-4'>
                  <Image src="/pic1.jpg" alt='photo' width={240} height={160} className="rounded-xl mt-6" />
              </div>
              <div className="font-bold text-xl sm:text-2xl">Al-Farabi St.</div>
              <h4 className="font-semibold text-base sm:text-lg">Premium apartments.</h4>
              <Link href="./" className='w-full sm:w-[160px] h-[55px] mt-2 rounded-full'>
                  <CustomButton
                      title="Place Order"
                      containerStyles="bg-[#fff] text-black rounded-full w-full h-full font-bold"
                      handleClick={handleScroll}
                  />
              </Link>
          </div>

          <div className="bg-[#5159bb] w-full sm:w-[300px] text-center h-[350px] rounded-xl text-black flex flex-col items-center mb-8 sm:mb-0">
              <div className='relative mb-4'>
                  <Image src="/pic2.jpg" alt='photo' width={240} height={160} className="rounded-xl mt-6" />
              </div>
              <div className="font-bold text-xl sm:text-2xl">KazakhFilm</div>
              <h4 className="font-semibold text-base sm:text-lg">For happy and big families.</h4>
              <Link href="./" className='w-full sm:w-[160px] h-[55px] mt-2 rounded-full'>
                  <CustomButton
                      title="Place Order"
                      containerStyles="bg-[#fff] text-black rounded-full w-full h-full font-bold"
                      handleClick={handleScroll}
                  />
              </Link>
          </div>
        </div>

        <div className='flex items-center'>
          <h2>Astana</h2>
          <div className="bg-[#5159bb] w-full sm:w-[300px] text-center h-[350px] rounded-xl text-black flex flex-col items-center mb-8 sm:mb-0">
              <div className='relative mb-4 '>
                  <Image src="/pic3.jpg" alt='photo' width={240} height={160} className="rounded-xl mt-6" />
              </div>
              <div className="font-bold text-xl sm:text-2xl">Zharokov St.</div>
              <h4 className="font-semibold text-base sm:text-lg">Best business apartments.</h4>
              <Link href="./" className='w-full sm:w-[160px] h-[55px] mt-2 rounded-full'>
                  <CustomButton
                      title="Place Order"
                      containerStyles="bg-[#fff] text-black rounded-full w-full h-full font-bold"
                      handleClick={handleScroll}
                  />
              </Link>
          </div>

          <div className="bg-[#5159bb] w-full sm:w-[300px] text-center h-[350px] rounded-xl text-black flex flex-col items-center">
              <div className='relative mb-4 '>
                  <Image src="/pic4.jpg" alt='photo' width={240} height={160} className="rounded-xl mt-6" />
              </div>
              <div className="font-bold text-xl sm:text-2xl">Gagarin St.</div>
              <h4 className="font-semibold text-base sm:text-lg">With all needs nearby.</h4>
              <Link href="./" className='w-full sm:w-[160px] h-[55px] mt-2 rounded-full'>
                  <CustomButton
                      title="Place Order"
                      containerStyles="bg-[#fff] text-black rounded-full w-full h-full font-bold"
                      handleClick={handleScroll}
                  />
              </Link>
          </div>
        </div>
    </div>
</div>

  )
}

export default Catalogue