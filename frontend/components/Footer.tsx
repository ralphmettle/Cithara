import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Link href="https://github.com/ralphmettle/Cithara">
      <div className="flex align-center justify-center">
        <div className="flex p-2 gap-2 rounded-md w-fit h-fit items-center justify-center pb-4 text-[rgb(92,3,3)] hover:text-cithara-primary transition-all cursor-pointer">
          <FaGithub className="w-8 h-8" />
          {/* <p className="font-medium">GitHub</p> */}
        </div>
      </div>
    </Link>
  );
}
