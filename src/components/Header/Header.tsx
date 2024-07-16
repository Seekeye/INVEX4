"use client";

import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { Navbar } from "../Navbar";
import { useState } from "react";
import Image from "next/image";
import { LoginForm } from "../LoginForm";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  return (
    <div className="container mx-auto my-5">
      <div className="flex items-center justify-between px-5 md:px-0">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="INVEX logo"
            width={100}
            height={100}
          />
        </Link>
        <CiMenuFries
          className="block text-2xl md:hidden"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />

        <Navbar openMobileMenu={openMobileMenu} />

        <div className="flex items-center gap-2 md:gap-5">
          <Link
            href="tel:626926798"
            className="flex items-center gap-4 cursor-pointer"
          >
            <BsTelephone />
            <span className="hidden md:block">+34 626926798</span>
          </Link>
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="px-3 py-2 text-white rounded-lg bg-secondary hover:bg-black"
          >
            Login
          </button>
        </div>
      </div>
      {isLoginModalOpen && (
        <LoginForm onClose={() => setIsLoginModalOpen(false)} />
      )}
    </div>
  );
}
