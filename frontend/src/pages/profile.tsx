import ProfileBhandaraCard from "@/components/bhandara-card-profile";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Calendar, Edit2, Mail, MapPin, Phone, Users } from "lucide-react";

const Profile = () => {
  return (
    <Layout>
      <div className="w-[100vw] pt-14 px-8 sm:px-20">
        <div className="sm:max-w-4xl  sm:mx-auto py-4">
          <div className="bg-white  border-2 border-neutral-500/10 p-4 flex flex-wrap sm:flex-nowrap gap-2 items-center rounded-md">
            <div className="h-14 w-14 sm:w-28 sm:h-28 bg-neutral-200 rounded-full"></div>
            <div className="flex flex-col  gap-2">
              <div className="flex gap-2 sm:gap-96">
                <h1 className="text-xl sm:text-3xl font-bold">Rajesh Sharma</h1>
                <Button className="bg-saffron text-white cursor-pointer flex gap-1">
                  <Edit2 />
                  Edit<p className="hidden sm:block">profile</p>
                </Button>
              </div>
              <p className="text-neutral-500 text-sm  sm:text-md w-full sm:w-[70%]">
                Dedicated to organizing community bhandaras and serving the
                community with devotion.
              </p>
              <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                <span className="flex items-center gap-0.5 text-neutral-500 text-sm">
                  <MapPin size={16} />
                  Delhi, India
                </span>
                <span className="flex items-center gap-0.5 text-neutral-500 text-sm">
                  <Calendar size={16} />
                  Joined January 2025
                </span>
                <span className="flex items-center gap-0.5 text-neutral-500 text-sm">
                  <Users size={16} />3 Bhandaras Organized
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white mt-6 border-2 border-neutral-500/10 p-4 flex flex-col gap-4 rounded-md">
            <h1 className="font-bold text-3xl">Contact Information</h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-64">
              <div className="flex gap-2">
                <Mail className="text-saffron" />
                rajesh.sharma@email.com
              </div>
              <div className="flex gap-2">
                <Phone className="text-saffron" />
                +91 98765 43210
              </div>
            </div>
          </div>
          <div className="bg-white mt-6 border-2 border-neutral-500/10 p-4 flex flex-col gap-4 rounded-md">
            <h1 className="font-bold text-3xl">My Bhandaras</h1>
            <div>
              <div className="">
                <ProfileBhandaraCard/>
                <ProfileBhandaraCard/>
                <ProfileBhandaraCard/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
