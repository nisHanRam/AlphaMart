import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./Logo";
import { NavMenu } from "./NavMenu";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-1">
          <Logo />
          <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl">
            AlphaMart
          </h1>
        </Link>
        <NavMenu />
      </div>
      <div className="flex gap-4">
        <Button variant="default" size="lg">
          Sign Up
        </Button>
        <Button variant="outline" size="lg">
          Sign In
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
