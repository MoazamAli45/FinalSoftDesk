import React from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";

function Headers() {
  return (
    <div className="w-full max-w-[1280px] m-auto flex flex-col px-4 md:px-[10px]">
      {/* ====> back to home icon */}
      <Fade direction="up" triggerOnce>
        <Link
          href="/"
          className="text-[22px] sm:text-[26px] text-brand-main w-full flex gap-2 sm:gap-4 items-center h-[90px]"
        >
          <BiArrowBack className="text-brand-main text-[30px] sm:text-[36px] backForAnimation object-contain" />
          Back to Home
        </Link>
      </Fade>
    </div>
  );
}

export default Headers;
