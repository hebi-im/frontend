"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

// import required modules
import { Navigation } from "swiper/modules";

import { mockVideos } from "@/app/_mock-datas/mockDatas";

export default function Videos() {
  return (
    <section className=" h-screen flex items-center justify-center snap-start">
      <div className="flex flex-col items-end gap-8">
        <div className=" w-[1440px] flex justify-between items-center ">
          <Image
            src={"/assets/icons/prev_arrow_circle.svg"}
            alt="prevArrowCircle"
            className="prev-arrow"
            width={48}
            height={48}
            style={{ cursor: "pointer" }}
          ></Image>
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            modules={[Navigation]}
            navigation={{
              nextEl: ".next-arrow",
              prevEl: ".prev-arrow",
            }}
            className="w-[1200px]"
          >
            {mockVideos.map((video: any, index: number) => {
              return (
                <SwiperSlide
                  key={index}
                  className="relative flex items-center justify-center"
                >
                  <iframe
                    width="1200"
                    height="675"
                    src={`${video.video_url}?controls=0&modestbranding=1&rel=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ borderRadius: "20px" }}
                  ></iframe>

                  <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-2">
                    <span className="text-white text-base font-['EB_Garamond']">
                      {video.uploadDate}
                    </span>
                    <h2 className="text-white text-2xl font-bold font-['EB_Garamond']">
                      {video.title}
                    </h2>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Image
            src={"/assets/icons/next_arrow_circle.svg"}
            className="next-arrow"
            alt="nextArrowCircle"
            width={48}
            height={48}
            style={{ cursor: "pointer" }}
          ></Image>
        </div>
        <div className="w-full pr-[110px] flex justify-end">
          <button className="inline-flex justify-start items-center gap-4 cursor-pointer">
            <span className="justify-start text-white text-2xl font-normal font-['EB_Garamond']">
              See All Videos
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
      </div>
    </section>
  );
}
