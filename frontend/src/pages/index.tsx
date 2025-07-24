import HeroSection from "../components/hero-section";
import BhandaraCard from "../components/bhandara-card";
import { Button } from "@/components/ui/button";
import Layout from "../components/layout/layout";
import { useAppSelector } from "@/redux/hooks";

const Index = () => {
  const listEvent = useAppSelector((state) => state.nav.listEvent);
  console.log(listEvent)
  return (
    <>
      <Layout>
        <div className="max-w-7xl mx-auto pt-16">
          <HeroSection />
          <section>
            <div className="mt-10">
              <div className="w-full mx-auto ">
                <div className="flex flex-col gap-3  text-center">
                  <h1 className="font-baloo font-semibold text-maroon text-3xl">
                    Today's Bhandaras
                  </h1>
                  <p className="text-neutral-500 text-xl">
                    {" "}
                    Join these sacred gatherings and experience the joy of
                    community sharing
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[20rem] md:w-6xl mx-auto py-10">
                  <BhandaraCard />
                  <BhandaraCard />
                  <BhandaraCard />
                </div>
              </div>
              <div className="text-center pb-6">
                <Button className="text-saffron bg-transparent border border-saffron hover:bg-saffron hover:text-white cursor-pointer px-5 py-1 font-semibold text-md ">
                  <a href="/events">View All bhandaras</a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Index;
