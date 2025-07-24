import {
  ArrowLeft,
  Calendar,
  Clock,
  Flame,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Share,
  User,
  Users,
} from "lucide-react";
import Layout from "../components/layout/layout";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BhandaraDetail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <Layout>
      <div className="pt-14 max-w-7xl mx-auto ">
        <a
          className="flex items-center gap-2 pl-8 pt-4 text-maroon cursor-pointer"
          href="/events"
        >
          <ArrowLeft />
          Back to Events
        </a>
        <div className="grid md:[grid-template-columns:70%_auto] my-8 px-4 ">
          <div className="h-full flex flex-col gap-6">
            <div className="mx-4 bg-white drop-shadow-xl rounded-lg border-2 border-border border-nuetral-500">
              <div className="min-h-[20rem] bg-gradient-to-l from-saffron/15 to-gold/15 rounded-t-lg flex justify-center">
                <div className="w-15 h-15 mt-36 flex items-center justify-center rounded-full bg-gradient-to-l from-gold to-saffron">
                  <Flame className="text-white text-center " />
                </div>
              </div>
              <span className="flex flex-col gap-1 px-2 py-2">
                <h3 className="font-baloo text-maroon font-semibold text-2xl">
                  Shri Ram Janmashtami Bhandara
                </h3>
                <p className="text-neutral-500">Shri Krishna Mandir</p>
              </span>
            </div>
            <div className="mx-4 bg-white drop-shadow-xl rounded-lg border-2 border-border border-nuetral-500 py-6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-1 text-maroon font-baloo text-xl font-semibold px-4">
                  <Calendar className="text-saffron" /> Event Details
                </div>
                <div className="flex gap-30 px-4">
                  <div className="flex gap-2 items-center">
                    <Calendar className="text-saffron" />
                    <div>
                      <h4>Date</h4>
                      <span className="text-neutral-500">
                        Monday, 26 August, 2024
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4">
                    <Clock className="text-saffron" />
                    <div>
                      <h4>Time</h4>
                      <span className="text-neutral-500">
                        12:00 PM - 3:00 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 px-4 ">
                  <MapPin className="text-saffron" />
                  <div className="">
                    <h4>Location</h4>
                    <p className="text-neutral-500 text-xl">
                      Shri Krishna Mandir, Vrindavan Road, Near ISKCON Temple,
                      Vrindavan, Uttar Pradesh 281121
                    </p>
                    <Button className="cursor-pointer border border-saffron bg-background text-saffron hover:bg-saffron hover:text-white mt-1">
                      <MapPin />
                      Get Directions
                    </Button>
                  </div>
                </div>
                <div className="flex gap-2 px-4 items-center">
                  <User className="text-saffron" />
                  <div>
                    <h4>Organizer</h4>
                    <p className="text-neutral-500">Temple Committee</p>
                  </div>
                </div>
                <div className="flex gap-2 px-4 items-center">
                  <Users className="text-saffron" />
                  <div>
                    <h4>Expected Attendees</h4>
                    <p className="text-neutral-500">500 people</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-4 bg-white drop-shadow-xl rounded-lg border-2 border-border border-nuetral-500 py-6">
              <div className="px-4">
                <h1 className="font-baloo text-xl font-semibold text-maroon">
                  About This Bhandara
                </h1>
                <p>
                  Join us for a sacred Janmashtami celebration with prasad
                  distribution. Traditional vegetarian feast will be served to
                  all devotees. Come with your family and friends to celebrate
                  Lord Krishna's birth anniversary.
                </p>
                <div className="border border-maroon/10 p-2 bg-saffron/10 rounded-lg">
                  <h2 className="text-maroon">Special Notes:</h2>
                  <p className="text-neutral-500">
                    Please bring your own plates and water bottles. Parking is
                    available near the temple premises.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-4 my-4 md:my-0">
            <div className=" border-2 border-saffron/20 px-4 py-6 flex flex-col gap-4 rounded-md">
              <h1 className="font-baloo text-maroon font-semibold text-center">
                Join This Bhandara
              </h1>
              <div className="flex justify-center">
                <Button className="bg-gradient-to-l from-saffron to-gold text-white font-semibold text-center">
                  <Users /> RSVP - I'm Going
                </Button>
              </div>
              <p className="text-neutral-500 text-center">
                500 people are attending
              </p>
              <div className="flex justify-center gap-4 ">
                <Button className="bg-transparent hover:bg-maroon text-maroon hover:text-white border border-maroon cursor-pointer">
                  <Heart /> Save
                </Button>
                <Button className="bg-transparent hover:bg-saffron text-saffron hover:text-white border border-saffron cursor-pointer">
                  <Share /> Share
                </Button>
              </div>
              <Button className="text-green-500 hover:text-white bg-transparent hover:bg-green-500 border border-green-500 w-full cursor-pointer">
                <MessageCircle />
                Share on whatsapp
              </Button>
            </div>
            <div className="mt-4 bg-white border-2 border-neutral-500/20 px-4 py-6 flex flex-col gap-4 rounded-md">
              <h1 className="font-baloo text-maroon font-semibold">
                Contact Organizer
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Phone</span>
                  <span className="text-saffron">+91 1234567890</span>
                </div>
                <Button className="w-full text-saffron bg-transparent hover:text-white hover:bg-saffron border border-saffron cursor-pointer">
                  <Phone />
                  Call Organizer
                </Button>
                <Button className="text-green-500 hover:text-white bg-transparent hover:bg-green-500 border border-green-500 w-full cursor-pointer">
                  <MessageCircle />
                  Whatsapp
                </Button>
              </div>
            </div>
            <div className="mt-4 bg-white border-2 border-neutral-500/20 px-4 py-6 flex flex-col gap-4 rounded-md">
              <h1 className="font-baloo text-maroon font-semibold">Location</h1>
              <div className="bg-neutral-200 h-36 w-full rounded-md flex justify-center">
                <MapPin className="flex justify-center items-center mt-16" />
              </div>
              <Button className="w-full text-saffron bg-transparent hover:text-white hover:bg-saffron border border-saffron cursor-pointer">
                <MapPin />
                View on Map
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BhandaraDetail;
