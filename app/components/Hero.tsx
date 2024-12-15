import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <header className=" bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <Link href="/">
          <Image
            src="./logo.svg"
            alt="logo"
            width={101}
            height={96}
            className="object-contain"
          />
        </Link>
        <h1 className="text-4xl sm:text-6xl  text-white lg:max-w-lg font-bold leading-[120%]">
          Explore the
          <span className="block font-bold text-red-600 whitespace-no-wrap">
            Diverse Realms
          </span>
          of Anime magic
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src="/anime.png" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
};

export default Hero;
