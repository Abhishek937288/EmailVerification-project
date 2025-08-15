import { Button, Heading, Text, TextField } from "@radix-ui/themes";
import {
  EnvelopeOpenIcon,
  LockOpen2Icon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <main className="flex h-screen justify-center items-center">
      <div className="text-center flex-1 max-w-[340px]">
        <Heading>AuthFlowX</Heading>
        <div className="mb-3"></div>
        <Text>Create your account and join us today</Text>
        <form className="w-full mt-8 flex-1 flex flex-col gap-6">
          <TextField.Root placeholder="Username" size="3">
            <TextField.Slot>
              <PersonIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
          <TextField.Root placeholder="Email" size="3">
            <TextField.Slot>
              <EnvelopeOpenIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
          <TextField.Root type="password" placeholder="Password" size="3">
            <TextField.Slot>
              <LockOpen2Icon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
          <div className="mt-0.5"></div>
          <Button className="!w-full">Sign Up</Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Log in
          </Link>
        </p>
        <p className="mt-4 border-t pt-3 border-slate-300 text-sm text-center text-gray-600">
          By continuing, you agree to our{" "}
          <Link
            to="/terms"
            className="underline-offset-4 hover:underline text-indigo-600"
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy"
            className="underline-offset-4 hover:underline text-indigo-600"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </main>
  );
};

export default Signup;
