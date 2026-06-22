"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { navItems } from "@/constants/menus";
import {  Mail, Menu, Phone } from "lucide-react";
import { HOTEL_INFO } from "@/constants/hotel";
import Logo from "./Logo";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="md:hidden text-[#A70F2E]"
        >
          <Menu size={28} />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px] bg-white p-0">
        <div className="h-full overflow-y-auto">
          {/* Logo */}
          <div className="border-b p-5">
            <Logo />
          </div>

          {/* Mobile Navigation */}
         <nav className="flex flex-col">
  <Accordion type="single" collapsible className="w-full">
    {navItems.map((item) => (
      <AccordionItem key={item.label} value={item.label}>
        {/* Trigger */}
        <div className="border-b">
          {item.children ? (
            <AccordionTrigger className="
              px-5 py-4
              font-semibold
              text-[#2d3e50]
              hover:text-[#A70F2E]
            ">
              {item.label}
            </AccordionTrigger>
          ) : (
            <Link
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                block px-5 py-4
                font-semibold
                text-[#2d3e50]
                hover:text-[#A70F2E]
                border-b
              "
            >
              {item.label}
            </Link>
          )}
        </div>

        {/* Children */}
        {item.children && (
          <AccordionContent className="bg-gray-50">
            {item.children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                onClick={() => setOpen(false)}
                className="
                  block px-8 py-3
                  text-sm
                  text-gray-600
                  hover:text-[#A70F2E]
                  border-b
                "
              >
                {child.label}
              </Link>
            ))}
          </AccordionContent>
        )}
      </AccordionItem>
    ))}
  </Accordion>
</nav>

          {/* Contact Info */}
          <div className="p-5 border-t mt-auto">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>{HOTEL_INFO.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>{HOTEL_INFO.email}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-5">
              {HOTEL_INFO.socialMedia.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    onClick={() => setOpen(false)}
                    className={`
                  flex h-9 w-9 items-center justify-center
                  bg-[#1f1f1f]
                  text-white
                  transition-all
                  duration-300
                  ${item.hoverClass}
                `}
                  >
                    <Icon size={16} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu