import { Flame, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Signup = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div>
        <div className="flex flex-col gap-4 py-8">
          <div className="flex flex-col text-center items-center gap-2">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-saffron to-gold">
              <Flame className="text-white" />
            </div>
            <h2 className="text-2xl font-baloo text-maroon font-semibold">
              Join Our Community
            </h2>
            <p className="text-neutral-600 tex-sm">
              Create your Bhandara account today
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle className="font-baloo text-maroon text-xl">
                  Create your account
                </CardTitle>
                <CardDescription>
                  Fill in your details to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input
                        id="phoneNumber"
                        type="text"
                        placeholder="+91 7991214521"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Create Password</Label>
                      <Input id="password" type="password" required
                      placeholder="Create strong password"
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button
                  type="submit"
                  className="w-full flex items-center bg-gradient-to-r from-saffron to-gold"
                >
                  <UserPlus />
                  Create Account
                </Button>
                <p className="text-sm text-neutral-500">
                  Already have an account?{" "}
                  <a href="/signin" className="text-saffron">
                    Sign In here
                  </a>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
