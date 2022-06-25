import React from "react";
import { BiSearch, BiBell, BiChevronDown } from "react-icons/bi";
import userImage from "../../assets/images/alexander.jpg";

const Header = () => {
  return (
    <header className="sticky top-4 self-start grid grid-cols-3 gap-x-4 h-14 mt-4 bg-app-d900">
      {/* Search Box */}
      <div className="col-span-2 flex items-center h-11 rounded-lg bg-app-d800 text-app-d300 text-base">
        <span className="ml-4 mr-2">
          <BiSearch />
        </span>
        <input
          placeholder="Search here..."
          className="h-11 w-full rounded-r-lg bg-inherit focus:outline-none text-sm placeholder:text-app-d300 placeholder:text-sm"
          type="text"
        />
      </div>

      {/* Account */}
      <div className="flex justify-end items-center space-x-3 h-11 text-lg">
        <button className="relative">
          <span>
            <BiBell />
          </span>
          <span className="absolute left-3 bottom-3 w-2 h-2 rounded-full bg-red-500"></span>
        </button>
        <button>
          <img src={userImage} alt="user-img" className="w-8 rounded-full" />
        </button>
        <button>
          <BiChevronDown />
        </button>
      </div>
    </header>
  );
};

export default Header;
