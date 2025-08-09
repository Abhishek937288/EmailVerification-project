import { Button, Heading, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center">
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
