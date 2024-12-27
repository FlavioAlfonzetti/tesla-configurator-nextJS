import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-6 mt-16">
      <Image src="/images/logo.svg" alt="Tesla" width={120} height={24} />
      <button>
        <i className="fa-solid fa-globe"></i>{" "}
        <span className="font-bold">US</span>
      </button>
    </header>
  );
};

export default Header;
