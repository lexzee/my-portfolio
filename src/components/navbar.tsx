"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "#" },
  ];

  return (
    <header className="mx-auto sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo / Brand */}
        <div className="mr-4 hidden md:flex p-4">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              DevPortfolio
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4 md:w-64">
              <SheetTitle className="flex items-center">
                <Link href="/" className="flex items-center">
                  <span className="font-bold">DevPortfolio</span>
                </Link>
              </SheetTitle>
              <div className="flex flex-col space-y-3 mt-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button asChild size="sm">
              <Link href="/#contact">Hire Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
