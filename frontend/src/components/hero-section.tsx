import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Flame, LocateIcon, Plus, Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full mx-auto my-20">
      <Flame size={30} className="text-saffron/40 animate-bounce absolute left-14 top-28"/>
      <Flame size={20} className="text-saffron/20 animate-bounce duration-1000 absolute right-14"/>
      <div className="flex flex-col justify-center items-center text-center gap-6"> 
        <div className="flex flex-col  justify-center gap-4 w-full">
          <h1 className="text-maroon font-baloo text-6xl font-semibold">
            Discover Bhandaras Near You
          </h1>
          <h3 className="text-2xl text-neutral-500">A Meal for the Soul</h3>
          <p className="flex justify-center mx-auto text-center text-xl font-light max-w-[50%] text-neutral-500">
            Connect with your community through sacred food offerings and
            Tehravin ceremonies. Find nearby Bhandaras and share the spirit of
            giving.
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center pt-4">
            <div className="relative">
                <Input className="min-w-xl pl-9 shadow-lg" placeholder="Find Bhandaras by City, Date or Temple Name"/>
                <Search className="absolute top-1.5 left-1.5 text-neutral-400"/>
            </div>
            <div className="flex mx-auto gap-2 items-center justify-center text-center pt-4">
                <Button className=" bg-gradient-to-r from-saffron to-gold hover:text-xl cursor-pointer px-5 py-1 font-semibold text-md " >
                    <Plus className="hover:text-xl"/>
                    List Your Bhandara
                </Button>
                <Button className="text-maroon bg-transparent border border-maroon hover:bg-maroon hover:text-white cursor-pointer px-5 py-1 font-semibold text-md">
                    <LocateIcon/>
                    Browse by City
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
