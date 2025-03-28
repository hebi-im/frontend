"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation } from "swiper/modules"

// import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { mockSongs } from "@/app/_mock-datas/mockDatas"

import PrevArrowCircleIcon from "@/assets/icons/prev_arrow_circle.svg"
import NextArrowCircleIcon from "@/assets/icons/next_arrow_circle.svg"

import { ebGaramond } from "@/styles/fonts"
import { cn } from "@/utils/tailwind-merge"

export default function Discography() {
  return (
    <section
      className="flex h-screen snap-start items-center justify-center"
      id="discography"
      data-section="Discography"
    >
      <div className="flex w-full max-w-[1200px] flex-col gap-8">
        <div className="flex w-full max-w-[1200px] items-center justify-between gap-10">
          <PrevArrowCircleIcon className="prev-arrow size-12 cursor-pointer" />

          <Swiper
            className="w-full max-w-[1200px]"
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={2.35}
            loop
            coverflowEffect={{
              rotate: 0,
              stretch: 82,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".next-arrow",
              prevEl: ".prev-arrow",
            }}
            modules={[EffectCoverflow, Navigation]}
          >
            {mockSongs.map((song, index) => (
              <SwiperSlide key={`discography-${index.toString()}`}>
                {({ isActive }) => (
                  <a
                    href={song.url}
                    className={`flex h-fit w-fit flex-col items-center justify-center gap-11 ${
                      isActive ? "cursor-pointer" : "cursor-default"
                    }`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className="group relative h-[500px] w-[500px]">
                      <div
                        className="absolute h-full w-full rounded bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url(${song.image})`,
                        }}
                      />

                      {isActive && (
                        <>
                          <div className="absolute z-40 h-full w-full rounded bg-black/40 opacity-0 duration-300 group-hover:opacity-100" />

                          <div className="absolute bottom-8 left-8 z-50 inline-flex flex-col gap-3 opacity-0 duration-300 group-hover:opacity-100">
                            <div
                              className={cn(
                                "font-semibold text-white",
                                ebGaramond.className,
                              )}
                            >
                              {song.uploadDate}
                            </div>
                            <div className="flex flex-col gap-1">
                              <div
                                className={cn(
                                  "text-sm text-white",
                                  ebGaramond.className,
                                )}
                              >
                                {song.type}
                              </div>
                              <div className="text-2xl font-bold text-white">
                                {song.title}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </a>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <NextArrowCircleIcon className="next-arrow size-12 cursor-pointer" />
        </div>

        {/* <div className="w-full flex justify-end">
          <button className="inline-flex items-center gap-4 cursor-pointer">
            <span className={cn("text-white text-2xl", ebGaramond.className)}>
              See All Discography
            </span>

            <ArrowRightIcon className="size-6" />
          </button>
        </div> */}
      </div>
    </section>
  )
}
