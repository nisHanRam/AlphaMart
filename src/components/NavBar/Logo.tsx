import Image from "next/image";
import logo from "../../../public/alphamart_logo.svg";

const Logo = () => {
  return <Image src={logo} width={30} height={30} alt="alphamart_logo" />;
};

export default Logo;
