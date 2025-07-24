"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

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
import { Calendar, MapPin, User} from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useAppDispatch } from "@/redux/hooks";
import { setListEvent } from "@/redux/navSlice";

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
  const dispatch = useAppDispatch();

  return (
    <Dialog open={true} onOpenChange={(open) => dispatch(setListEvent(open))}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-scroll p-0">
        <DialogHeader className="p-4 bg-gradient-to-l from-gold to-saffron text-white">
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="font-baloo text-2xl font-semibold">
                List Your Bhandara
              </DialogTitle>
              <DialogDescription className="text-neutral-50">
                Share your community event with others
              </DialogDescription>
            </div>
              
          </div>
        </DialogHeader>

        <div className="p-6">
          <form className="space-y-6">
            {/* Event Details */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-1 items-center">
                <Calendar size={18} className="text-saffron" />
                <h1 className="text-maroon text-xl font-semibold font-baloo">
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
                            value={occasion.toLowerCase()}
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
                  <Input id="date" type="date" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Time *</Label>
                  <Input
                    id="time"
                    type="text"
                    placeholder="e.g., 12:00 pm - 3:00 pm"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-1 items-center">
                <MapPin size={18} className="text-saffron" />
                <h1 className="text-maroon text-xl font-semibold font-baloo">
                  Location
                </h1>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="venueName">Venue Name *</Label>
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

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-1 items-center">
                <User size={18} className="text-saffron" />
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
                    placeholder="Your Name or Organization"
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
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="attendees">Expected Attendees</Label>
                  <Input
                    id="attendees"
                    type="text"
                    placeholder="Approximate Number"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="note">Additional Note</Label>
                  <Textarea placeholder="Any special instruction, dietary information, or other details..." />
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-1 items-center">
                <User size={18} className="text-saffron" />
                <h1 className="text-maroon text-xl font-semibold font-baloo">
                  Event Image (optional)
                </h1>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">Upload Image</Label>
                <Input id="image" type="file" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-4">
              <Button
                type="submit"
                className="w-[80%] bg-gradient-to-l from-gold to-saffron text-xl"
              >
                Publish Bhandara
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => dispatch(setListEvent(false))}
                className="w-[20%] border-2 border-maroon text-maroon text-xl"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ListEventForm;
