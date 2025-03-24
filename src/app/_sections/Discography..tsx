"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { mockSongs } from "@/app/_mock-datas/mockDatas";

export default function Discography() {
  return (
    <section className=" h-screen flex items-center justify-center snap-start">
      <div className="flex flex-col items-end gap-8">
        <div className="w-[1440px] flex justify-between items-center ">
          <Image
            src={"/assets/icons/prev_arrow_circle.svg"}
            alt="prevArrowCircle"
            className="prev-arrow"
            width={48}
            height={48}
          ></Image>
          <Swiper
            className=" w-[1200px] "
            effect={"coverflow"}
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
            {mockSongs.map((song: any, index: number) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div
                    className={`flex w-fit h-fit flex-col justify-center items-center relative gap-11 ${
                      isActive ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <div className="relative w-[500px] h-[500px]">
                      <div
                        className="w-full h-full rounded bg-center bg-cover bg-no-repeat"
                        style={{
                          backgroundImage: `url(https://i.ytimg.com/vi/${song.id}/hq720.jpg)`,
                        }}
                      />
                      {isActive && (
                        <div className="absolute bottom-8 left-8 inline-flex flex-col justify-start items-start gap-3">
                          <div className="justify-start text-white text-base font-bold font-['EB_Garamond']">
                            2025. 04. 22.
                          </div>
                          <div className="flex flex-col justify-start items-start gap-1">
                            <div className="justify-start text-white text-xs font-normal font-['EB_Garamond']">
                              1st Mini Album
                            </div>
                            <div className="justify-start text-white text-2xl font-extrabold font-['EB_Garamond']">
                              Chroma
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <Image
            src={"/assets/icons/next_arrow_circle.svg"}
            className="next-arrow"
            alt="nextArrowCircle"
            width={48}
            height={48}
          ></Image>
        </div>
        <button className="inline-flex justify-start items-center gap-4 cursor-pointer">
          <span className="justify-start text-white text-2xl font-normal font-['EB_Garamond']">
            See All Discography
          </span>
          <Image
            src={"/assets/icons/right_arrow.svg"}
            className="right-arrow"
            alt="rightArrow"
            width={24}
            height={24}
          ></Image>
        </button>
      </div>
    </section>
  );
}
