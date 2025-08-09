import { Button, Heading, Text } from "@radix-ui/themes";
import "react-otp-kit/dist/index.css";
import OTPInput from "../../components/shared/OTPInput";

const Verify = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex-1 max-w-[390px] flex flex-col gap-2 text-center">
        <Heading>Verify Your Email</Heading>
        <Text>Enter the 6-digit code sent to </Text>
        <p className="text-sm text-slate-700 -mt-2">example@gmail.com</p>
        <form className="mt-3">
          <OTPInput />
          <div className="mt-8"></div>
          <Button className="!w-full !max-w-[280px]" size={"2"}>
            Verify
          </Button>
          <div className="mt-2"></div>
          <Button type="button" className="!cursor-pointer" variant="ghost">
            Resend code
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Verify;
