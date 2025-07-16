import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, MapPin, User, X } from "lucide-react";
import { Textarea } from "./ui/textarea";

const ListEventForm = () => {
  const occasions = [
    "Tehravin",
    "Janmashtami",
    "Navratri",
    "Diwali",
    "Holi",
    "Ram Navami",
    "Shivratri",
    "Karva Chauth",
    "Other Festival",
    "Community Service",
  ];

  return (
    <div className={`max-w-7xl mx-auto pt-6 hidden justify-center z-10 backdrop-blur-md `}>
      <Card className="w-full max-w-2xl m-0 p-0 max-h-[90vh] overflow-y-scroll z-10">
        <CardHeader className="m-0 p-4 bg-gradient-to-l from-gold to-saffron text-white">
          <div className="">
            <CardTitle className="font-baloo text-2xl font-semibold">
              List Your Bhandara
            </CardTitle>
            <CardDescription className="text-neutral-50">
              Share your community event with others
            </CardDescription>
          </div>

          <CardAction className="bg-transparent">
            <X />
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            {/* Event Details fields  */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-1 items-center">
                <Calendar size={18} className="text-saffron" />
                <h1 className="text-maroon text-xl font-semibold font-baloo">
                  {" "}
                  Event Details
                </h1>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Event Title *</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="e.g., Shri Krishna Janmashtamin Bhandara"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="occasion">Occasion *</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select occasion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Occasion</SelectLabel>
                        {occasions.map((occasion) => (
                          <SelectItem
                            key={occasion}
                            value={occasion.toLocaleLowerCase()}
                          >
                            {occasion}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date">Date *</Label>
                  <Input id="data" type="date" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="title">Time *</Label>
                  <Input
                    id="time"
                    type="text"
                    placeholder="e.g., 12:00 pm - 3:00 pm"
                    required
                  />
                </div>
              </div>
            </div>
            {/* Location fields */}
            <div className="py-4 flex flex-col gap-4">
              <div className="flex gap-1 items-center">
                <MapPin size={18} className="text-saffron text-center" />
                <h1 className="text-maroon text-xl font-semibold font-baloo">
                  Location
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Venue Name *</Label>
                  <Input
                    id="venueName"
                    type="text"
                    placeholder="e.g., Shri Krishna Mandir"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="fullAddress">Full Address *</Label>
                  <Textarea placeholder="Enter complete address with landmarks" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" type="text" placeholder="City" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      type="text"
                      placeholder="State"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Information  */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-1 items-center">
                <User size={18} className="text-saffron text-center" />
                <h1 className="text-maroon text-xl font-semibold font-baloo">
                  Contact Information
                </h1>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="organizerName">Organizer Name *</Label>
                  <Input
                    id="organizerName"
                    type="text"
                    placeholder="Your Name or Ogranization"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="number">Contact Number *</Label>
                  <Input
                    id="number"
                    type="text"
                    placeholder="Whatsapp/Mobile Number"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="attendees">Expected Attendees </Label>
                  <Input
                    id="attendees"
                    type="text"
                    placeholder="Approximate Number"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="note">Additional Note </Label>
                  <Textarea placeholder="Any special instruction, dietary information, or other details..." />
                </div>
              </div>
            </div>
            {/* Image upload */}
            <div className="flex flex-col gap-4 py-4">
              <div className="flex gap-1 items-center">
                <User size={18} className="text-saffron text-center" />
                <h1 className="text-maroon text-xl font-semibold font-baloo">
                  Event Image (optional)
                </h1>
              </div>
              <div className="flex flex-col gap-4" >
                <div className="grid gap-2">
                  <Label htmlFor="title"></Label>
                  <Input
                    id="venueName"
                    type="file"
                    placeholder="upload image"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex gap-2 py-4">
          <Button type="submit" className="w-[80%] bg-gradient-to-l from-gold to-saffron cursor-pointer text-xl">
            Publish Bhandara
          </Button>
          <Button variant="outline" className="w-[20%] border-2 border-marron text-maroon text-xl cursor-pointer">
            Cancel
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ListEventForm;
