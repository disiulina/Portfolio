import Image from "next/image";
import Link from "next/link";
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="text-left">
        <h1 className="text-8xl font-bold mb-4 ">Welcome! <Link href="/Skill" passHref>
            <button className="border-2 border-white text-white ml-11 mr-8 px-6 py-3 rounded-full text-2xl font-light hover:bg-slate-500">
              Skills
            </button>
          </Link>
          <Link href="/Experience" passHref>
            <button className="border-2 border-white text-white ml-11 mr-6 px-6 py-3 rounded-full text-2xl font-light hover:bg-slate-500">
              Experiences
            </button>
          </Link>
          </h1>
        <div className="flex items-center bg-white text-black p-6 pt-40 rounded-lg shadow-lg">
          <div className="mr-4 md:mr-6">
          <Image
            src="/images/LIPPP 1.png"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-md object-cover" 
          />
          </div>

          <div className="text-left md:text-right flex-1">
            <p className="text-3xl md:text-4xl lg:text-6xl font-bold">OCTLIVATUA</p>
            <p className="text-3xl md:text-4xl lg:text-6xl font-bold">PATRICIA</p>
            <p className="text-3xl md:text-4xl lg:text-6xl font-bold">DISIULINA</p>
          </div>
        </div>

        


        <div className="text-center overflow-hidden mt-8 w-full">
          <div className="animate-marquee whitespace-nowrap">
            <h4 className="text-6xl md:text-8xl lg:text-9xl inline-block">
              DVLPR.DSGNR. 
            </h4>
          </div>
        </div>
        
        
      </div>
    </div>

  );
}
