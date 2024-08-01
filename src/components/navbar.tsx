import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SheetSide } from "./sidebar";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className=" container mx-auto h-[80px] flex items-center justify-between">
      <div className="flex items-center ">
        <div className="shrink-0">
          <SheetSide />
        </div>
        <div className="">
          <Link href={"/"}>
            <Image
              src="/assets/images/blast2.png"
              alt="Logo"
              width={100}
              height={80}
              className="object-contain"
            />
          </Link>
        </div>
      </div>

      <nav className="hidden lg:block">
        <article className="flex items-center gap-5">
          <Link href={"/"}>Back to map</Link>
          <Link href={"/"}>About us</Link>
        </article>
      </nav>
      <w3m-button />
    </header>
  );
};

export default Navbar;
