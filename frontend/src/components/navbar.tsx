import { Calendar, Flame, Info, Menu, Plus, UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setHamburger, setListEvent } from "@/redux/navSlice";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const listEvent = useAppSelector((state) => state.nav.listEvent);
  const isProfile = useAppSelector((state) => state.nav.isProfile);

  return (
    <div className="w-full bg-white shadow-sm fixed top-0 z-10">
      <header className="flex justify-between items-center max-w-7xl mx-auto py-2 px-8">
        <a href="/">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-l from-gold to-saffron">
              <Flame className="text-white" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-baloo text-maroon text-xl">Bhandara</h3>
              <span className="text-xs -mt-1 text-muted-foreground">
                Community connect
              </span>
            </div>
          </div>
        </a>
        <div className="hidden md:flex items-center sm:justify-between ">
          <nav className="flex gap-4">
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
          <div className="px-4">
            {isProfile ? (
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
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
        <div className="md:hidden">
          <Menu onClick={() => dispatch(setHamburger(true))} />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
