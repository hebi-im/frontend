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
                  className="flex items-center justify-center"
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
          ></Image>
        </div>
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
    </section>
  );
}
