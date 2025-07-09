import {
  Home,
  Mail,
  Moon,
  Settings,
  Sun,
  User,
  type LucideIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import DarkModeToggler from "./DarkModeToggler";
import { Link } from "react-router";
import Logo from "./Logo";

interface NavigationItem {
  name: string;
  page: PageType;
  icon: LucideIcon;
}
interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

type PageType = "home" | "about" | "services" | "contact";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigation: NavigationItem[] = [
    { name: "Home", page: "home", icon: Home },
    { name: "About", page: "about", icon: User },
  ];

  const handleNavClick = (page: PageType): void => {
    //setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}

            <Button
              variant="ghost"
              onClick={() => handleNavClick("home")}
              className="flex-shrink-0 flex items-center p-2"
            >
              <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Logo size={"60"} />
              </div>
              <span className="ml-2 text-xl font-bold">Task Manager</span>
            </Button>

            {/* Desktop Navigation
            <div className="hidden md:ml-6 md:flex md:space-x-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.page;
                return (
                  <Button
                    key={item.name}
                    variant={isActive ? "default" : "ghost"}
                    onClick={() => handleNavClick(item.page)}
                    className="inline-flex items-center"
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Button>
                );
              })}
              </div> */}
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle */}
            <DarkModeToggler />
            <Link to="/sign-in">
              <Button className=" ">Login</Button>
            </Link>
            <Link to="/sign-up">
              <Button variant="outline">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
