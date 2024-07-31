import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className=" container mx-auto h-[80px] flex items-center justify-between">
      <Link href={"/"}>
        <Image
          src="/assets/images/blast2.png"
          alt="Logo"
          width={100}
          height={80}
          className="object-contain"
        />
      </Link>

      <nav>
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
