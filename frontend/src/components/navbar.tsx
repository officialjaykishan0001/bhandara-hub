import { Calendar, Flame, Info, LogIn, Plus, UserPlus } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-sm fixed top-0 ">
      <header className="flex sm:justify-between items-center max-w-7xl mx-auto py-2 px-8">
        <a href="/">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron/10">
              <Flame className="text-saffron" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-baloo text-maroon text-xl">Bhandara</h3>
              <span className="text-xs -mt-1 text-muted-foreground">
                Community connect
              </span>
            </div>
          </div>
        </a>
        <div className="flex items-center sm:justify-between ">
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
            <a
              href="/list-events"
              className={`flex items-center space-x-2 transition-colors duration-200 font-medium ${
                location.pathname === "/list-events"
                  ? "text-saffron"
                  : "text-muted-foreground hover:text-saffron"
              }`}
            >
              <Plus className="h-4 w-4" />
              <span>List Event</span>
            </a>
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
          <div className="flex items-center gap-2 ">
            <Button
              variant={"default"}
              className="flex items-center cursor-pointer text-neutral-500 bg-white hover:bg-white"
            >
              <LogIn className="text-neutral-500" />
              Sign Up
            </Button>
            <Button className="bg-gradient-to-r from-saffron to-gold  cursor-pointer h-fit">
              <UserPlus />
              Sign In
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
