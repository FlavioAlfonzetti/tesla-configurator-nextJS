import Image from "next/image";
import { TbWorld } from "react-icons/tb";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-6 mt-16">
      <Image src="/images/logo.svg" alt="Tesla" width={120} height={24} />
      <button className="flex items-center gap-1">
        <TbWorld className="relative top-[1px]" size={18} />
        <span className="font-bold">EU</span>
      </button>
    </header>
  );
};

export default Header;
