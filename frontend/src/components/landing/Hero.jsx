import { Button, Heading, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        }}
      />

      <div className="flex-1 max-w-lg text-center">
        <Heading size={"8"}>Secure & Seamless Authentication</Heading>
        <div className="my-2"></div>

        <Text className="!mt-10">
          Practice modern authentication flows with email, OTP verification, and
          password management. all in one place.
        </Text>
        <div className="my-5"></div>
        <Link to="/sign-up">
          <Button size="2">Sign Up</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
