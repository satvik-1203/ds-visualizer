import Link from "next/link";
import React from "react";

interface Props {}

const NavBar: React.FC<Props> = () => {
  return (
    <div className=" sticky top-0 z-40  ">
      <div className=" border-b backdrop-blur-[3px] py-3 px-3 mx-8 border-gray-600">
        <Link href="/">
          <a className="text-white">Home</a>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
