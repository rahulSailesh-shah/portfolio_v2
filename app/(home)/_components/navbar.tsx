"use client";
import { useState } from "react";
import { Logo } from "./logo";
import { NavbarItem } from "./navbar-item";
import Image from "next/image";

const items = [
  {
    label: "Home",
    value: "home",
  },
  {
    label: "Projects",
    value: "projects",
  },
  {
    label: "Work",
    value: "work",
  },
  {
    label: "Contact",
    value: "contact",
  },
];

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    closeDrawer();
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="container mx-auto flex  items-center md:flex-row justify-between px-4 md:px-16 py-2">
      <div>
        <Logo />
      </div>

      <div className="md:hidden cursor-pointer" onClick={openDrawer}>
        <Image height={40} width={40} src="./drawer.svg" alt="drawer" />
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="md:hidden fixed top-0 right-0 h-screen w-4/5 bg-[#f5f5f5] z-50 ">
          <div className="flex justify-end p-4">
            <div className="cursor-pointer" onClick={closeDrawer}>
              <Image height={40} width={40} src="./cross.svg" alt="drawer" />
            </div>
          </div>
          <div className="flex flex-col items-start p-4 ml-8">
            {items.map((item) => (
              <NavbarItem
                key={item.value}
                label={item.label}
                value={item.value}
                isItemActive={activeItem === item.value}
                handleItemClick={handleItemClick}
              />
            ))}
            <div className="text-black">Resume</div>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="md:flex gap-x-10 hidden">
        {items.map((item) => (
          <NavbarItem
            key={item.value}
            label={item.label}
            value={item.value}
            isItemActive={activeItem === item.value}
            handleItemClick={handleItemClick}
          />
        ))}
      </div>

      <div className="md:flex hidden text-black">Resume</div>
    </div>
  );
};
