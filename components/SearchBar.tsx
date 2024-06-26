"use client";

import Image from "next/image";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string}) => (
  <button type="submit" className={'mr-[300px] z-10 ${otherClasses}'}>
    <Image 
      src="/searchicon.png"
      alt="search icon"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(manufacturer.toLowerCase());
  };

  const updateSearchParams = (manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
       searchParams.delete("manufacturer");
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchButton otherClasses="sm:hidden"/>
      </div>
    </form>
  );
};

export default SearchBar;