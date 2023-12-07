"use client";

import Image from 'next/image';
import Link from 'next/link';
import CustomFilter from './CustomFilter';
import SearchBar from './SearchBar';
import { location, yearsOfProduction } from '@/constants';

const Catalogue = () => {
  return (
    <div>
        <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Apartaments Catalogue</h1>
          <p>Explore the best apartaments for you</p>
        </div>
      </div>

      <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='Location' options={location} />
            <CustomFilter title='Year' options={yearsOfProduction} />
          </div>
        </div>

      <div className="flex flex-row justify-center space-x-5">
            <div className="bg-[#5159bb] w-[300px] text-center h-[300px] rounded-xl text-black flex justify-center flex-col items-center hover:w-[350px] hover:h-[350px] transition-[5s]">
                <div className='relative mb-4'>
                    <Image src="/pic1.png" alt='photo' fill className="rounded-xl " />
                </div>
                <div className="font-bold text-2xl">Al-Farabi St.</div>
                <h4 className="font-semibold text-base">Premium and comfortable apartments.</h4>                     
            </div>

        <div className="bg-[#5159bb] w-[300px] text-center h-[300px] rounded-xl text-black flex justify-center flex-col items-center hover:w-[350px] hover:h-[350px] transition-[5s]">
          <div className='relative mb-4 '>
            <Image src="/pic2.jpg" alt='photo' fill className="rounded-xl" />
          </div>
          <div className="font-bold text-2xl">KazakhFilm</div>
          <h4 className="font-semibold text-base">Best for happy and big families.</h4>      
        </div>

        <div className="bg-[#5159bb] w-[300px] text-center h-[300px] rounded-xl text-black flex justify-center flex-col items-center hover:w-[350px] hover:h-[350px] transition-[5s]">
          <div className='relative mb-4 '>
            <Image src="/pic3.jpg" alt='photo' fill className="rounded-xl"/>
          </div>
          <div className="font-bold text-2xl">Zharokov St.</div>
          <h4 className="font-semibold text-base">High quality business apartments.</h4>      
        </div>

        <div className="bg-[#5159bb] w-[300px] text-center h-[300px] rounded-xl text-black flex justify-center flex-col items-center hover:w-[350px] hover:h-[350px] transition-[5s]">
          <div className='relative mb-4 '>
            <Image src="/pic4.jpg" alt='photo' fill className="rounded-xl" />
          </div>
          <div className="font-bold text-2xl">Gagarin St.</div>
          <h4 className="font-semibold text-base">For better life with all needs nearby.</h4>      
        </div>

      </div>
      
      
      <div className='bg-[#5159bb] w-[1260px] m-auto mt-2 text-center h-[100px] rounded-xl text-black flex justify-center items-center'>
        <a href="/" className='w-full h-full'>
          <button className='w-full h-full'>
            Text
          </button>
        </a>
      </div>
      
    </div>
  )
}

export default Catalogue