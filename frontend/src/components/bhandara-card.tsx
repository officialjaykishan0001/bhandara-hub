import {
  Calendar,
  Clock,
  Flame,
  Heart,
  MapPinIcon,
  Share,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";

const BhandaraCard = () => {
  return (
    <div className="min-h-96 max-w-96  border-2 border-border border-nuetral-500 rounded-lg hover:shadow-md hover:border-saffron/30 cursor-pointer">
      <div className="flex flex-col gap-1 bg-white">
        <div className="h-36 bg-gradient-to-br from-saffron/20 to-gold/20 flex justify-center">
          <div className="w-10 h-10 mt-12 flex items-center justify-center rounded-full bg-saffron/10">
            <Flame className="text-saffron text-center " />
          </div>
        </div>
        <div className="bg-white">
          <div className="p-4 flex flex-col">
            <h1 className="font-baloo text-maroon text-xl">
              Shri Ram Janmashtami Bhandara
            </h1>
            <p className="text-neutral-500">Shri Krishna Mandir</p>
          </div>
          <div className="p-4 pt-0 flex flex-col gap-2">
            <span className="flex gap-1 items-center text-neutral-500 text-sm">
              <MapPinIcon size={18} className="text-saffron" /> Vrindavan, UP
            </span>
            <span className="flex gap-1 items-center text-neutral-500 text-sm">
              <Calendar size={18} className="text-saffron" /> 13/07/2025
            </span>
            <span className="flex gap-1 items-center text-neutral-500 text-sm">
              <Clock size={18} className="text-saffron" />
              4:00pm - 10:00pm
            </span>
            <span className="flex gap-1 items-center text-neutral-500 text-sm">
              <Users size={18} className="text-saffron" /> 500 expected
            </span>
          </div>
        </div>

        <div className="bg-white flex gap-1 items-center pt-0 p-3 justify-center">
          <Button className="border border-saffron bg-background text-saffron w-32 rounded-lg hover:bg-saffron hover:text-white cursor-pointer">
            <Heart /> Save
          </Button>
          <Button className="border border-maroon bg-background text-maroon w-32 rounded-lg hover:bg-maroon hover:text-white cursor-pointer">
            <Share />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BhandaraCard;
