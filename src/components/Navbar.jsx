import { useState ,useEffect} from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    
    <nav
    className={`fixed top-0 w-full h-20 z-50 transition-all py-4 sm:py-4 md:py-2 duration-300 shadow-md ${
      isScrolled ? "bg-white/70 backdrop-blur-md" : "bg-white"
    }`}
  >
    <div className="container mx-auto flex flex-wrap justify-between items-center md:py-4 py-2 lg:px-52 md:px-52 sm:px-10 px-2">
      <div className="text-black text-xl sm:text-md md:text-3xl font-bold font-mono">
        WABISABI PROJECT
      </div>
      <ul className="flex space-x-6 text-lg sm:text-xl md:text-2xl">
        <li className="hover:border-4 border-gray-400 border-solid font-extrabold p-2">
          <FaShoppingCart />
        </li>
        <li className="hover:border-4 border-gray-400 border-solid font-extrabold p-2">
          <FaArrowRightFromBracket />
        </li>
        <li className="text-gray-400">|</li>
        <li className="hover:border-4 border-gray-400 border-solid font-extrabold p-2">
          <RxHamburgerMenu />
        </li>
      </ul>
    </div>
  </nav>
    
  );
};

export default Navbar;
