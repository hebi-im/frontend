"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

// import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { mockVideos } from "@/app/_mock-datas/mockDatas"

import PrevArrowCircleIcon from "@/assets/icons/prev_arrow_circle.svg"
import NextArrowCircleIcon from "@/assets/icons/next_arrow_circle.svg"

import { ebGaramond } from "@/styles/fonts"
import { cn } from "@/utils/tailwind-merge"

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
})

export default function Videos() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  return (
    <section
      className="flex h-screen snap-start items-center justify-center"
      id="videos"
      data-section="Videos"
    >
      <div className="flex w-full max-w-[1200px] flex-col items-end gap-8">
        <div className="flex w-full max-w-[1200px] items-center justify-between gap-10">
          <PrevArrowCircleIcon
            className="prev-arrow size-12 cursor-pointer"
            onClick={() => setIsPlaying(false)}
          />

          <Swiper
            className="w-full max-w-[1200px]"
            centeredSlides
            slidesPerView={1}
            navigation={{
              nextEl: ".next-arrow",
              prevEl: ".prev-arrow",
            }}
            modules={[Navigation]}
          >
            {mockVideos.map((video, index) => {
              return (
                <SwiperSlide
                  key={`video-${index.toString()}`}
                  className="relative flex aspect-video items-center justify-center"
                >
                  <ReactPlayer
                    url={video.video_url}
                    className="rounded-md"
                    width="100%"
                    height="100%"
                    pip
                    controls
                    playing={isPlaying}
                    playsinline
                    light
                    config={{
                      youtube: {
                        playerVars: {
                          fs: 0,
                          rel: 0,
                          modestbranding: 0,
                        },
                      },
                    }}
                    onClickPreview={() => setIsPlaying(true)}
                    onPlay={() => setIsPlaying(true)}
                    onEnded={() => setIsPlaying(false)}
                  />

                  {!isPlaying && (
                    <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-2">
                      <span
                        className={cn(
                          "text-white",
                          ebGaramond.className,
                        )}
                      >
                        {video.uploadDate}
                      </span>
                      <h2
                        className={cn(
                          "text-2xl font-bold text-white",
                          ebGaramond.className,
                        )}
                      >
                        {video.title}
                      </h2>
                    </div>
                  )}
                </SwiperSlide>
              )
            })}
          </Swiper>

          <NextArrowCircleIcon
            className="next-arrow size-12 cursor-pointer"
            onClick={() => setIsPlaying(false)}
          />
        </div>

        {/* <div className="w-full flex justify-end">
          <button className="inline-flex items-center gap-4 cursor-pointer">
            <span className={cn("text-white text-2xl", ebGaramond.className)}>
              See All Videos
            </span>

            <ArrowRightIcon className="size-6" />
          </button>
        </div> */}
      </div>
    </section>
  )
}
