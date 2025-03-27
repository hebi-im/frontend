"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"

import { cn } from "@/utils/tailwind-merge"

import {
  mockHeroImages,
  mockMessages,
} from "@/app/_mock-datas/mockDatas"
import { SiYoutube } from "@icons-pack/react-simple-icons"

import { dmSerifDisplay } from "@/styles/fonts"

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
})

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isEnded, setIsEnded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerSlideshowInterval =
    useRef<ReturnType<typeof setInterval>>(null)

  const videoId = "hokrG5p7cEY"

  function playImageSlideshow() {
    bannerSlideshowInterval.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % mockHeroImages.length)
    }, 10000)
  }

  useEffect(() => {
    window.addEventListener("click", () => setIsMuted(false))

    return () => {
      if (bannerSlideshowInterval.current) {
        clearInterval(bannerSlideshowInterval.current)
      }

      window.removeEventListener("click", () => setIsMuted(false))
    }
  }, [videoId])

  return (
    <section
      className="relative flex h-screen snap-start items-center justify-center overflow-hidden"
      data-section="hero"
      data-section-name=""
    >
      <div className="absolute inset-0">
        <div
          className={cn(
            "absolute inset-0 z-10 transition-opacity duration-500",
            !isEnded && !isPlaying ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Video Thumbnail"
            className="h-full w-full scale-110 object-cover blur-xl"
            fill
          />
        </div>

        {isEnded ? (
          mockHeroImages.map((image, index) => (
            <div
              key={`banner-${index.toString()}`}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.src}
                fill
                className="object-cover"
              />
            </div>
          ))
        ) : (
          <ReactPlayer
            url={`https://youtu.be/${videoId}`}
            className="absolute inset-0 size-full transition-opacity duration-500"
            width="100%"
            height="100%"
            pip={false}
            controls={false}
            playing={isPlaying}
            muted={isMuted}
            playsinline
            config={{
              youtube: {
                playerVars: {
                  fs: 0,
                  rel: 0,
                  cc_load_policy: 0,
                  iv_load_policy: 3,
                },
              },
            }}
            onReady={() => setIsPlaying(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(true)}
            onEnded={() => {
              setIsPlaying(false)
              setIsEnded(true)

              playImageSlideshow()
            }}
            onError={() => {
              setIsPlaying(false)
              setIsEnded(true)

              playImageSlideshow()
            }}
          />
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 h-screen bg-black/50" />

      <div className="from-minsk-900 absolute inset-x-0 bottom-0 z-30 h-1/4 bg-gradient-to-t to-transparent">
        <div className="absolute bottom-10 left-16 flex flex-col gap-2 text-xs text-white">
          <span className="font-semibold">
            © 2025 Project Hebi.im. ALL RIGHTS RESERVED.
          </span>

          <span className="font-light">
            Hebi.im은 Hebi가 운영하는 공식 사이트가 아닙니다.
          </span>
        </div>

        {mockMessages.map((message, index) => (
          <div
            key={`message-${index.toString()}`}
            className={cn(
              "absolute right-16 bottom-10 transition-all duration-1000",
              currentIndex === index ? "opacity-100" : "opacity-0",
            )}
          >
            <a
              href={message.link}
              target="_blank"
              className="flex flex-col items-end gap-3.5"
            >
              <h1
                className={cn(
                  "text-right text-4xl !font-bold text-white",
                  dmSerifDisplay.className,
                )}
              >
                {message.title}
              </h1>

              <div className="flex items-center gap-3">
                <SiYoutube size={20} />

                <p className="font-semibold text-white">
                  {message.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
