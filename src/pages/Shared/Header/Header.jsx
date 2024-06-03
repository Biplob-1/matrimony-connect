import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut(); 
      navigate('/sign-in'); 
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const navLinks = (
    <>
      <li className="flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 text-violet-600 border-b-2 border-violet-600"
              : "px-4 py-2 hover:bg-gray-200 rounded"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to="/biodatas"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 text-violet-600 border-b-2 border-violet-600"
              : "px-4 py-2 hover:bg-gray-200 rounded"
          }
        >
          Biodatas
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 text-violet-600 border-b-2 border-violet-600"
              : "px-4 py-2 hover:bg-gray-200 rounded"
          }
        >
          About Us
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 text-violet-600 border-b-2 border-violet-600"
              : "px-4 py-2 hover:bg-gray-200 rounded"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  const authLinks = user ? (
    <button onClick={handleLogout} className="self-center px-8 py-3 rounded bg-violet-600 text-gray-50 hover:bg-violet-950">
      Logout
    </button>
  ) : (
    <>
      <NavLink
        to="/sign-in"
        className={({ isActive }) =>
          isActive
            ? "self-center px-8 py-3 rounded bg-violet-600 text-gray-50 hover:bg-violet-950"
            : "self-center px-8 py-3 rounded bg-violet-600 hover:bg-violet-950"
        }
      >
        Sign in
      </NavLink>
      <NavLink
        to="/sign-up"
        className={({ isActive }) =>
          isActive
            ? "self-center px-8 py-3 rounded bg-violet-600 text-gray-50 hover:bg-violet-950"
            : "self-center px-8 py-3 rounded bg-violet-600 hover:bg-violet-950"
        }
      >
        Sign up
      </NavLink>
    </>
  );

  return (
    <div>
      <header className="p-4 bg-gray-400 text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
            <img src="https://i.ibb.co/MNJGtMc/logo.png" alt="Logo" className="h-8" />
          </NavLink>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            {navLinks}
          </ul>
          
          <div className="items-center flex-shrink-0 hidden lg:flex space-x-3">
            {authLinks}
          </div>
          <button className="p-4 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden">
            <ul className="space-y-2">
              {navLinks}
            </ul>
            <div className="flex flex-col space-y-2 mt-4">
              {authLinks}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
