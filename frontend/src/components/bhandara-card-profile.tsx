import { Calendar, MapPin, Star, Users } from "lucide-react";
import { Button } from "./ui/button";

const ProfileBhandaraCard = () => {
  return (
    <div className="px-6 py-4 mt-4 border border-neutral-500/30 border-l-4 border-l-saffron rounded-lg">
      <div className="flex justify-between">
        <h3 className="font-bold text-md">Shri Ram Navami Bhandara</h3>
        <Button className="bg-background border border-neutral-400 text-neutral-600">
          View Details
        </Button>
      </div>
      <div className="text-neutral-500 flex gap-3 items-center">
        <Calendar size={16} />
        Monday, 15 April, 2024 at 12:00 PM
      </div>
      <div className="text-neutral-500 flex gap-2 items-center">
        <MapPin size={16} />
        Ram Mandir, Connaught Place
      </div>
      <div className="text-neutral-500 flex gap-2 items-center">
        <Users size={16} />
        250 attended
      </div>
      <div className="text-neutral-500 flex gap-2 items-center">
        <Star size={16} />
        4.8/5.0 rating
      </div>
    </div>
  );
};

export default ProfileBhandaraCard;
