import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo";
import Button from "./Button";
import {
  SignedIn,
  SignedOut,
  useClerk,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

import { coin } from "../assets";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useUser();
  const { openSignIn, openSignUp } = useClerk();
  const { credits } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openRegister = () => openSignUp();
  const openLogin = () => openSignIn();

  const toggleMenu = () => setIsMenuOpen((pv) => !pv);

  return (
    <nav className="px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
      {/* Logo and Title */}
      <Link to="/" className="flex items-center space-x-2.5 cursor-pointer">
        <Logo />
        <span className="text-primary text-2xl font-semibold">
          <span className="text-text-muted dark:text-dark-text-muted">
            Remove
          </span>
          .bg
        </span>
      </Link>

      {/* Mobile menu button */}
      <div className="block md:hidden relative">
        <button className="pt-1.5" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {isMenuOpen && (
          <div className="absolute z-[51] bg-bg dark:bg-dark-bg top-8 right-4 dark:shadow-dark shadow rounded-lg p-2 w-36">
            <SignedOut>
              <Button onClick={openLogin} className="w-full">
                Login
              </Button>
              <hr className="border-neutral-600" />
              <Button onClick={openRegister} className="w-full">
                Sign Up
              </Button>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-2 px-4 py-2">
                <UserButton />{" "}
                <span className="leading-tight">{user?.firstName}</span>
              </div>
              <hr className="border-neutral-600" />
              <div
                onClick={() => navigate("/pricing")}
                className="cursor-pointer flex items-center justify-center gap-2 text-center pt-2 pb-1"
              >
                <img src={coin} className="size-5" alt="coin" />
                <button>Credits: {credits}</button>
              </div>
            </SignedIn>
          </div>
        )}
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-4">
        <SignedOut>
          <Button
            onClick={openLogin}
            className="hover:bg-neutral-200/60 dark:hover:bg-neutral-600/70 rounded-full"
          >
            Login
          </Button>
          <Button
            onClick={openRegister}
            className="bg-neutral-200/80 dark:bg-neutral-600 hover:bg-neutral-300 dark:hover:bg-neutral-500 rounded-full"
          >
            Sign Up
          </Button>
        </SignedOut>
        <SignedIn>
          <button
            onClick={() => navigate("/pricing")}
            className="cursor-pointer bg-primary/60 pl-3 pr-4 py-1.5 rounded-full dark:bg-primary/85 inline-flex items-center gap-2"
          >
            <img src={coin} className="size-5" alt="coin" />
            <span>Credits: {credits}</span>
          </button>
          <div className="flex items-center gap-2">
            <UserButton /> <span>{user?.firstName}</span>
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
