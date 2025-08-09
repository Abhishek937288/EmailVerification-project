import { Button, Heading, Text, TextField } from "@radix-ui/themes";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your send-reset-code logic here
    alert(`Reset code sent to ${email}`);
  };

  return (
    <main className="flex h-screen justify-center items-center">
      <div className="text-center flex-1 max-w-[340px]">
        <Heading>AuthFlowX</Heading>
        <div className="mb-3"></div>
        <Text>Enter your email to receive a password reset code</Text>

        <form className="w-full mt-5 flex-1" onSubmit={handleSubmit}>
          <TextField.Root
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
            autoComplete="email"
            placeholder="Email"
            size="3"
          >
            <TextField.Slot>
              <EnvelopeOpenIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>

          <div className="my-8"></div>

          <Button type="submit" className="!w-full">
            Send Reset Code
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Remembered your password?{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default ForgetPassword;
