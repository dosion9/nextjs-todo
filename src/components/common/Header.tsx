import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className=" bg-yellow-500">
      <div className="container mx-auto  px-16 py-4">
        <nav className="flex gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/todo"}>Todo</Link>
          <Link href={"/todo/log"}>Todo Log</Link>
        </nav>
      </div>
    </header>
  );
};
