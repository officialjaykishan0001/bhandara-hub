import { ArrowRight, Calendar, Info, Plus, UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import { setHamburger, setListEvent } from "@/redux/navSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const HamburgerMenu = () => {
  const dispatch = useAppDispatch();
  const listEvent = useAppSelector((state) => state.nav.listEvent);
  const hamburger = useAppSelector((state) => state.nav.hamburger);
  const isProfile = useAppSelector((state) => state.nav.isProfile);

  return (
    <div
      className={`drop-shadow-2xl w-[70vw] h-screen bg-white fixed right-0 z-10 px-4 py-4 ${
        hamburger ? "" : "hidden"
      }`}
    >
      <div className="">
        <ArrowRight onClick={() => dispatch(setHamburger(false))} />
      </div>
      <div className="flex gap-2 flex-col pt-8">
        <nav className="flex flex-col gap-2">
          <a
            href="/events"
            className={`flex items-center space-x-2 transition-colors duration-200 font-medium ${
              location.pathname === "/events"
                ? "text-saffron"
                : "text-muted-foreground hover:text-saffron"
            }`}
          >
            <Calendar className="h-4 w-4" />
            <span>All Events</span>
          </a>
          <span
            className={`cursor-pointer flex items-center space-x-2 transition-colors duration-200 font-medium ${
              listEvent
                ? "text-saffron"
                : "text-muted-foreground hover:text-saffron"
            }`}
            onClick={() => dispatch(setListEvent(true))}
          >
            <Plus className="h-4 w-4" />
            <span>List Event</span>
          </span>
          <a
            href="/about"
            className={`flex items-center space-x-2 transition-colors duration-200 font-medium ${
              location.pathname === "/about"
                ? "text-saffron"
                : "text-muted-foreground hover:text-saffron"
            }`}
          >
            <Info className="h-4 w-4" />
            <span>About</span>
          </a>
        </nav>
        <div className="">
          {isProfile ? (
            <div className="flex gap-2 items-center cursor-pointer">

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>Profile</span>
            </div>
          ) : (
            <Button className="bg-gradient-to-r from-saffron to-gold  cursor-pointer h-fit">
              <a href="/signup" className="flex gap-1 items-center">
                <UserPlus />
                Sign Up
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
