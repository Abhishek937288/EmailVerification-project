import { Button, Container } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b border-slate-300 bg-white/40 backdrop-blur-3xl fixed left-0 right-0 top-0">
      <Container size={"3"} className="px-3 py-4">
        <div className=" flex items-center flex-row justify-between">
          <Link to="/" className="font-bold font-mono text-xl">
            AuthFlowX
          </Link>
          <div className="flex gap-3">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/sign-up">
              {" "}
              <Button className="mx-sm:hidden"> Sign Up</Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
