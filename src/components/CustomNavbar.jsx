'use client';

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from 'next/link';
import Button from '@nextui-org/button';

export default function CustomNavbar() {
  return (
    <NextUINavbar>
      <NavbarBrand>
        <Link href="/">
          Elite Bartending
        </Link>
      </NavbarBrand>
    </NextUINavbar>
  );
}
