import { Flame, LogIn } from "lucide-react";
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

const Signin = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div>
        <div className="flex flex-col gap-4 py-8">
          <div className="flex flex-col text-center items-center gap-2">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-saffron to-gold">
              <Flame className="text-white" />
            </div>
            <h2 className="text-2xl font-baloo text-maroon font-semibold">
              Welcom Back
            </h2>
            <p className="text-neutral-600 tex-sm">
              Sign in to your Bhandara account
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle className="font-baloo text-maroon text-xl">
                  Sign In
                </CardTitle>
                <CardDescription>
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
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
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" required
                      placeholder="Enter your password"
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
                  <LogIn />
                  Sign In
                </Button>
                <p className="text-sm text-neutral-500">
                  Don't have an account?{" "}
                  <a href="/signin" className="text-saffron">
                    Sign Up here
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

export default Signin;
