import { Flame, Heart } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-maroon text-neutral-50 py-10 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-2 py-4">
          <div className="flex flex-col gap-5 col-span-2">
            <div className="flex gap-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron">
                <Flame className="text-white" />
              </div>
              <div>
                <h1 className="font-baloo font-semibold text-xl">
                  Bhandara Community
                </h1>
                <p className=" text-sm text-neutral-200 -mt-1">
                  Connecting Hearts Through Sacred Sharing
                </p>
              </div>
            </div>
            <p className="text-neutral-100 align-text-bottom max-w-[85%]">
              Bhandara is a sacred tradition of community food offering that
              brings people together in the spirit of sharing and devotion. Our
              platform helps you discover and participate in these meaningful
              gatherings across India.
            </p>
            <p className="flex items-center gap-2 text-neutral-200 text-sm">
              <Heart size={16} className="text-saffron" /> Built with love for
              the community
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-baloo font-semibold ">About Bhandara</h1>
            <a href="#" className="hover:text-saffron text-sm text-neutral-100">
              <p>What is Bhandara?</p>
            </a>
            <a href="#" className="hover:text-saffron text-sm text-neutral-100">
              <p>Tehravin Ceremony</p>
            </a>
            <a href="#" className="hover:text-saffron text-sm text-neutral-100">
              <p>Cultural Significance</p>
            </a>
            <a href="#" className="hover:text-saffron text-sm text-neutral-100">
              <p>How to Organize</p>
            </a>
            <a href="#" className="hover:text-saffron text-sm text-neutral-100">
              <p>Community Guidelines</p>
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Quick Links</h1>
            <a href="" className="hover:text-saffron text-sm text-neutral-100">
              <p>FAQ</p>
            </a>
            <a href="" className="hover:text-saffron text-sm text-neutral-100">
              <p>Privacy Policy</p>
            </a>
            <a href="" className="hover:text-saffron text-sm text-neutral-100">
              <p>Tems of Service</p>
            </a>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-baloo font-semibold text-center">Understanding Bhandara - For the Next Generation</h3>
            <div className="flex gap-1 pt-3">
              <div>
                <h2 className="text-gold font-semibold ">What is Bhandara?</h2>
                <p className="text-neutral-100">Bhandara is a traditional Indian practice of offering free meals to the community, especially during religious occasions. It represents the spirit of seva (service) and sharing with all, regardless of background</p>
              </div>
              <div >
                <h2 className="text-gold font-semibold">Tehravin Ceremony</h2>
                <p className="text-neutral-100">Tehravin is observed on the 13th day after someone passes away. Families organize Bhandara as part of this ceremony to honor their loved ones and seek blessings for their peaceful journey.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 flex gap-1 items-center text-neutral-200 text-sm justify-center">
          <p>&copy;  2025 Bhandara Community Platform. Made with for bringing communities together.</p>
          <Heart size={18} className="text-saffron"/>
          <p>for bringing communities together.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
