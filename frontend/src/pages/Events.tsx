import BhandaraCard from "@/components/bhandara-card";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilterIcon, Search } from "lucide-react";
import { useState } from "react";

const Events = () => {
  const [events, setEvents] = useState("allEvents");

  return (
    <Layout>
      <div className="w-[100vw] pt-14">
        <section className="h-80  bg-gradient-to-br from-saffron/10 to-gold/10 py-10">
          <div className="max-w-7xl mx-auto text-center py-8 ">
            <div className="flex flex-col gap-4 ">
              <h1 className="text-5xl font-baloo font-semibold text-maroon">
                All Bhandara Events
              </h1>
              <p className="text-lg text-neutral-500">
                Discover sacred food offerings and community gatherings across
                India
              </p>
              <div className="relative w-[70%] mx-auto">
                <Input
                  className="min-w-xl pl-9 shadow-lg bg-accent-foreground "
                  placeholder="Find Bhandaras by City, Date or Temple Name"
                />
                <Search className="absolute top-1.5 left-1.5 text-neutral-400" />
                <Button className="flex justify-items-start mt-4 items-center cursor-pointer">
                  <FilterIcon />
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="w-full flex justify-center rounded-lg">
            <span className="max-w-[45%] h-10 mx-auto flex  items-center text-gray-700 bg-gray-200 text-center  p-1 rounded-lg text-sm">
              <p
                onClick={() => setEvents("allEvents")}
                className={`h-8 rounded-lg cursor-pointer py-1 px-4 ${
                  events === "allEvents" ? "bg-saffron text-white" : ""
                }`}
              >
                All Events (6)
              </p>
              <p
                onClick={() => setEvents("upcoming")}
                className={`h-8 rounded-lg cursor-pointer py-1 px-4 ${
                  events === "upcoming" ? "bg-saffron text-white" : ""
                }`}
              >
                Upcoming (5)
              </p>
              <p
                onClick={() => setEvents("past")}
                className={`h-8 rounded-lg cursor-pointer py-1 px-4 ${
                  events === "past" ? "bg-saffron text-white" : ""
                }`}
              >
                Past(1)
              </p>
            </span>
          </div>
          <div className="max-w-7xl mx-auto">
            <p className="text-neutral-500 text-center py-4">
              Showing 6 of 6 events
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-6xl mx-auto py-10">
              <BhandaraCard />
              <BhandaraCard />
              <BhandaraCard />
              <BhandaraCard />
              <BhandaraCard />
              <BhandaraCard />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Events;
