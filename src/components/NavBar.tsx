'use client'

import { useState } from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Button, { Types } from './Button';
import { BrandLogo } from "./BrandLogo";

interface MenuItem {
  path: string;
  name: string;
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems: MenuItem[] = [
    { path: '/', name: 'Home' },
    { path: '/works', name: 'Works' },
    { path: '/case-studies', name: 'Case Studies' },
    { path: '/tools', name: 'Tools' },
    { path: '/blogs', name: 'Blogs' },
  ];
  const name: string = 'Ben.Borla';

  function handleMenuOpenChange(isOpen: boolean | undefined): void {
    setIsMenuOpen(!!isOpen)
  }

  return (
    <Navbar onMenuOpenChange={handleMenuOpenChange} className="bg-black">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <BrandLogo />
          <Link href='/' className="text-2xl font-bold text-inherit text-white">{name}</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive>
            <Link href={item.path} className="
              text-1xl
              text-lime-400
              transition-all
              duration-500
              before:content-['']
              before:absolute
              before:-bottom-2
              before:left-0
              before:w-0
              before:h-0.5
              before:rounded-full
              before:opacity-0
              before:transition-all
              before:duration-500
              before:bg-gradient-to-r
              before:from-lime-400
              before:via-neongreen
              before:to-white
              hover:before:w-full
              hover:text-neongreen
              hover:before:opacity-100">
              &gt; {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button type={Types.BUTTON}>
            hire me!
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-black my-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className='text-center'>
            <Link
              className="w-full text-lime-400 hover:text-neongreen text-2xl"
              href={item.path}
              size="lg"
            >
              &gt; {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
