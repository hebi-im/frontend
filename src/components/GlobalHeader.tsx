"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function GlobalHeader() {
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname.substring(1));
  }, [pathname]);

  return (
    <header className="text-white flex justify-between items-center p-[64px] fixed top-0 left-0 w-full">
      <div className=" flex items-center gap-[32px] h-[44px]">
        <Image
          src={"/assets/logo.svg"}
          alt="hebiLogo"
          width={114}
          height={44}
        ></Image>
        {currentPath && (
          <div className="flex items-center gap-[32px] border-l-2 border-white pl-8">
            <span className="justify-start text-[40px] font-bold font-['EB_Garamond'] leading-10">
              {currentPath}
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center">
        <button className="cursor-pointer">
          <Image
            src={"/assets/icons/menu.svg"}
            alt="menu"
            width={49}
            height={24}
          ></Image>
        </button>
      </div>
    </header>
  );
}
