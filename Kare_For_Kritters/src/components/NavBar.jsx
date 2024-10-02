import { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  MegaphoneIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const userName = localStorage.getItem("username");
    const userRole = localStorage.getItem("role");
    if (userName != null) {
      setUser(userName);
    }
    if (userRole != null) {
      setRole(userRole);
    }
  }, []);
  const navItems = [
    {
      name: "ADOPT",
      items: [
        { name: "View All Pets", link: "/pets" },
        { name: "Adoption Process", link: "/adoption-process" },
        { name: "Adoption Application", link: "/adoption-application" },
      ],
    },
    {
      name: "WHO WE ARE",
      items: [
        { name: "Success Stories", link: "/success" },
        { name: "Locations", link: "/location" },
      ],
    },
    {
      name: "RESOURCES",
      items: [
        { name: "Pet Training", link: "/resources#pet-training" },
        { name: "Health Tips", link: "/resources#health-tips" },
        { name: "Pet Insurance", link: "/resources#pet-insurance" },
      ],
    },
  ];
  return (
    <header className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center text-2xl font-bold">
          <HeartIcon className="w-8 h-8 mr-2" />
          <span>KARE FOR KRITTERS</span>
        </a>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <a
                href="#"
                className="flex items-center hover:text-orange-200 transition duration-300"
              >
                {item.name}
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </a>
              <ul className="absolute hidden group-hover:block bg-white text-gray-800 min-w-[200px] shadow-lg rounded-md overflow-hidden">
                {item.items.map((subItem) => (
                  <li key={subItem.name}>
                    <a
                      href={subItem.link}
                      className="block px-4 py-2 hover:bg-orange-100 transition duration-300"
                    >
                      {subItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {role != null ? (
            <div className="relative group">
              <Link
                to="/admin"
                className="flex items-center hover:text-orange-200 transition duration-300"
              >
                ADMIN
              </Link>
            </div>
          ) : null}
        </nav>
        <div className="flex items-center">
          
          {user ? (
            <button
              onClick={() => {
                localStorage.removeItem("username");
                localStorage.removeItem("role");
                setUser(null);
              }}
              className="bg-white text-orange-600 px-4 py-1 rounded-full hover:bg-orange-100 transition duration-300 hidden md:block"
            >
              LOGOUT
            </button>
          ) : (
            <Link to="/login" className="inline-block">
              <button className="bg-white text-orange-600 px-4 py-1 rounded-full hover:bg-orange-100 transition duration-300 hidden md:block">
                LOGIN
              </button>
            </Link>
          )}

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XCircleIcon className="w-6 h-6" />
            ) : (
              <MegaphoneIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-orange-700 p-4">
          <nav className="flex flex-col space-y-4">
            {["ADOPT", "WHO WE ARE", "GET INVOLVED", "RESOURCES"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:text-orange-200 transition duration-300"
                >
                  {item}
                </a>
              )
            )}
          </nav>
          <div className="mt-4">
            <input
              type="search"
              placeholder="Search..."
              className="w-full py-2 px-3 rounded-full bg-orange-500 text-white placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <button className="mt-4 w-full bg-white text-orange-600 px-4 py-2 rounded-full hover:bg-orange-100 transition duration-300">
            Logout
          </button>
        </div>
      )}
    </header>
  );
}

export default NavBar;
