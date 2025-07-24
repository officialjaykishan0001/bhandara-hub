import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useAppDispatch } from "@/redux/hooks";
import { setIsEditProfile } from "@/redux/navSlice";

const EditProfileForm = () => {
  const dispatch = useAppDispatch();
  return (
    <Dialog open={true} onOpenChange={(open) => dispatch(setIsEditProfile(open))}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-scroll p-0">
        <DialogHeader className="p-4 bg-gradient-to-l from-gold to-saffron text-white">
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="font-baloo text-2xl font-semibold">
                Edit Your Profile
              </DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <div className="p-6">
          <form className="space-y-6">
            {/* Personal Detail */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-1 items-center">
                <User size={18} className="text-saffron" />
                <h1 className="text-maroon text-xl font-semibold font-baloo">
                  Personal Details
                </h1>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="fullname">Full Name </Label>
                  <Input
                    id="fullname"
                    type="text"
                    placeholder="Rajesh Sharma"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="fullAddress">Your Bio</Label>
                  <Textarea placeholder="Dedicated to organizing community bhandaras and serving the community with devotion." />
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
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="attendees">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="rajesh.sharma@email.com"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="number">Phone Number</Label>
                  <Input
                    id="number"
                    type="text"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-1 items-center">
                <User size={18} className="text-saffron" />
                <h1 className="text-maroon text-xl font-semibold font-baloo">
                  Profile Picture
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
                className="bg-gradient-to-l from-gold to-saffron "
              >
                Update Profile
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => dispatch(setIsEditProfile(false))}
                className="border-2 border-maroon text-maroon "
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

export default EditProfileForm;
