import { Button, Heading, Text, TextField } from "@radix-ui/themes";
import { LockClosedIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const ResetPassword = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (otp.length !== 6) {
      setError("OTP code must be 6 digits");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    // TODO: Add your reset password logic here
    alert("Password reset successfully!");
  };

  return (
    <main className="flex h-screen justify-center items-center">
      <div className="text-center flex-1 max-w-[340px]">
        <Heading>Reset Your Password</Heading>
        <div className="mb-3"></div>
        <Text>
          Enter the 6-digit code sent to your email and set your new password.
        </Text>

        <form className="w-full mt-5 flex-1" onSubmit={handleSubmit}>
          <TextField.Root
            placeholder="OTP Code"
            size="3"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={6}
          />

          <div className="my-4"></div>

          <TextField.Root
            type="password"
            placeholder="New Password"
            size="3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          >
            <TextField.Slot>
              <LockClosedIcon height={16} width={16} />
            </TextField.Slot>
          </TextField.Root>

          <div className="my-4"></div>

          <TextField.Root
            type="password"
            placeholder="Confirm Password"
            size="3"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          >
            <TextField.Slot>
              <LockClosedIcon height={16} width={16} />
            </TextField.Slot>
          </TextField.Root>

          {error && <div className="mt-4 text-sm text-red-600">{error}</div>}

          <div className="my-8"></div>

          <Button type="submit" className="!w-full">
            Reset Password
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

export default ResetPassword;
