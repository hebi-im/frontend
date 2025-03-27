"use client";

import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import throttle from "@/utils/throttle";

import HebiLogo from "@/assets/logo.svg";
import MenuIcon from "@/assets/icons/menu.svg";

export default function GlobalHeader() {
  const [currentPath, setCurrentPath] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  const $scrollArea = useRef<HTMLDivElement>(null);

  const updateHash = throttle(() => {
    if (!pathname.substring(1)) {
      // section 일러먼트 중 data-section값이 있는 값만 가져오기
      const sections = document.querySelectorAll<HTMLDivElement>(
        "section[data-section]"
      );

      for (const section of sections) {
        if (section.getBoundingClientRect().top == 0) {
          setCurrentPath(
            section.dataset.section === "hero" || !section.dataset.sectionName
              ? ""
              : section.dataset.sectionName
          );

          router.replace(`#${section.dataset.section ?? "hero"}`, {
            scroll: false,
          });
          break;
        }
      }
    }
  }, 200); // 200ms 간격으로 제한

  useEffect(() => {
    $scrollArea.current = document.querySelector("div#scroll");

    if (pathname.substring(1)) {
      setCurrentPath(pathname.substring(1));
    }

    updateHash();

    $scrollArea.current!.addEventListener("scrollend", updateHash);
    return () => {
      $scrollArea.current!.removeEventListener("scrollend", updateHash);
    };
  }, [pathname, router, updateHash]);

  return (
    <header className="text-white flex justify-between items-center px-16 pt-12 fixed top-0 left-0 w-full z-100">
      <div className="flex items-center gap-8">
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();

              $scrollArea.current!.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <HebiLogo height={44} />
        </Link>

        {currentPath && (
          <div className="flex items-center gap-8 border-l-2 border-white pl-8">
            <span className="justify-start text-[40px] font-bold font-['EB_Garamond'] leading-10">
              {currentPath}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center">
        <button className="cursor-pointer" title="Menu">
          <MenuIcon height={24} />
        </button>
      </div>
    </header>
  );
}
