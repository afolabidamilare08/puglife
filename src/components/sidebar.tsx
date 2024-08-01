"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="w-auto h-auto p-0 bg-transparent text-primary hover:bg-transparent hover:opacity-100">
            <Menu className="" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"top"} className="bg-[#0c0b0b]">
          <SheetHeader>
            <SheetTitle>
              <Link href={"/"}>
                <Image
                  src="/assets/images/blast2.png"
                  alt="Logo"
                  width={100}
                  height={80}
                  className="object-contain"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="py-4 flex flex-col gap-3">
            <Button className="bg-transparent text-primary hover:text-primary/60 hover:text-black text-lg">
              <Link href={"https://play.puglife.io/"}>Back to map</Link>
            </Button>
            <Button className="bg-transparent text-primary hover:text-primary/60 hover:text-black text-lg">
              <Link href={"/"}>About us</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
