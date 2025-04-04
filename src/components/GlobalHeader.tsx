"use client"

import React, { useEffect, useRef, useState } from "react"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

import { throttle } from "@/utils/throttle"

import MenuIcon from "@/assets/icons/menu.svg"

import { ebGaramond } from "@/styles/fonts"
import { cn } from "@/utils/tailwind-merge"

export default function GlobalHeader() {
  const [currentPath, setCurrentPath] = useState("")

  const router = useRouter()
  const pathname = usePathname()

  const $scrollArea = useRef<HTMLDivElement>(null)

  const updateHash = throttle(() => {
    const pathWithoutI18n = pathname.split("/").slice(2).join("/")

    // section 일러먼트 중 data-section값이 있는 값만 가져오기
    if (!pathWithoutI18n) {
      const sections = document.querySelectorAll<HTMLDivElement>(
        "section[data-section]",
      )

      // eslint-disable-next-line no-restricted-syntax
      for (const section of sections) {
        if (section.getBoundingClientRect().top === 0) {
          setCurrentPath(
            section.id === "hero" || !section.dataset.section
              ? ""
              : section.dataset.section,
          )

          const basePathname = pathname.endsWith("/")
            ? pathname
            : `${pathname}/`
          window.history.replaceState(
            {},
            "",
            `${basePathname}#${section.id ?? "hero"}`,
          )
          break
        }
      }
    }
  }, 200) // 200ms 간격으로 제한

  useEffect(() => {
    $scrollArea.current = document.querySelector("div#scroll")

    if (pathname.substring(1)) {
      setCurrentPath(pathname.substring(1))
    }

    updateHash()

    $scrollArea.current!.addEventListener("scrollend", updateHash)
    return () => {
      $scrollArea.current!.removeEventListener(
        "scrollend",
        updateHash,
      )
    }
  }, [pathname, router, updateHash])

  return (
    <header className="fixed top-0 left-0 z-100 flex w-full items-center justify-between px-16 pt-12 text-white">
      <div className="flex items-center gap-8">
        <Link
          href="/"
          onClick={e => {
            if (pathname === "/") {
              e.preventDefault()

              $scrollArea.current!.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          }}
        >
          <Image
            src="https://static.hebi.im/assets/images/2025/03/symbol.webp"
            alt="Hebi."
            width={114}
            height={44}
          />
        </Link>

        {currentPath && (
          <div className="flex items-center gap-8 border-l-2 border-white pl-8">
            <span
              className={cn(
                "text-4xl leading-10 font-bold",
                ebGaramond.className,
              )}
            >
              {currentPath}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center">
        <button type="button" className="cursor-pointer" title="Menu">
          <MenuIcon height={24} />
        </button>
      </div>
    </header>
  )
}
