"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

// import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { mockSongs } from "@/app/_mock-datas/mockDatas";

import PrevArrowCircleIcon from "@/assets/icons/prev_arrow_circle.svg";
import NextArrowCircleIcon from "@/assets/icons/next_arrow_circle.svg";

import { ebGaramond } from "@/styles/fonts";
import { cn } from "@/utils/tailwind-merge";

export default function Discography() {
  return (
    <section
      className="h-screen flex items-center justify-center snap-start"
      data-section="discography"
      data-section-name="Discography"
    >
      <div className="flex w-full max-w-[1200px] flex-col gap-8">
        <div className="flex w-full max-w-[1200px] gap-10 justify-between items-center">
          <PrevArrowCircleIcon className="cursor-pointer size-12 prev-arrow" />

          <Swiper
            className="w-full max-w-[1200px]"
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2.35}
            loop={true}
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
                    href={`https://youtu.be/${song.id}`}
                    className={`flex w-fit h-fit flex-col justify-center items-center gap-11 ${
                      isActive ? "cursor-pointer" : "cursor-default"
                    }`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className="relative group w-[500px] h-[500px]">
                      <div
                        className="absolute w-full h-full rounded bg-center bg-cover bg-no-repeat"
                        style={{
                          backgroundImage: `url(https://i.ytimg.com/vi/${song.id}/hq720.jpg)`,
                        }}
                      />

                      {isActive && (
                        <>
                          <div className="group-hover:opacity-100 opacity-0 duration-300 absolute w-full h-full rounded bg-black/40 z-40" />

                          <div className="group-hover:opacity-100 z-50 opacity-0 duration-300 absolute bottom-8 left-8 inline-flex flex-col gap-3">
                            <div
                              className={cn(
                                "text-white font-semibold",
                                ebGaramond.className
                              )}
                            >
                              {song.uploadDate}
                            </div>
                            <div className="flex flex-col gap-1">
                              <div
                                className={cn(
                                  "text-white text-sm",
                                  ebGaramond.className
                                )}
                              >
                                {song.type}
                              </div>
                              <div className="text-white text-2xl font-bold">
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

          <NextArrowCircleIcon className="cursor-pointer size-12 next-arrow" />
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
  );
}
