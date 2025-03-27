"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { mockHeroImages, mockMessages } from "@/app/_mock-datas/mockDatas";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const playerRef = useRef<any>(null);
  const videoId = "hokrG5p7cEY";

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    function loadYouTubeAPI() {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    function playImageSlideshow() {
      intervalId = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % mockHeroImages.length);
      }, 10000);
    }

    function initPlayer() {
      playerRef.current = new window.YT.Player("youtube-player", {
        height: "100%",
        width: "100%",
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          fs: 0,
          rel: 0,
          playsinline: 1,
          enablejsapi: 1,
          cc_load_policy: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
            event.target.mute();
          },
          onStateChange: (event: any) => {
            console.log("Player State:", event.data);
            switch (event.data) {
              case window.YT.PlayerState.PLAYING:
                setIsPlaying(true);
                break;

              case window.YT.PlayerState.ENDED:
                setIsPlaying(false);
                setIsEnded(true);
                if (playerRef.current?.destroy) {
                  playerRef.current.destroy();
                }
                playImageSlideshow();
                break;
            }
          },
        },
      });
    }

    window.onYouTubeIframeAPIReady = initPlayer;
    loadYouTubeAPI();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [videoId]);

  return (
    <section className="relative h-screen flex items-center justify-center snap-start overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 z-10 transition-opacity duration-500"
          style={{ opacity: isEnded ? 0 : isPlaying ? 0 : 1 }}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="VideoㅅThumbnail"
            className="w-full h-full object-cover blur-xl scale-110"
          />
        </div>
        {isEnded ? (
          <>
            {mockHeroImages.map((image, index) => (
              <div
                key={index}
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
            ))}
          </>
        ) : (
          <div
            id="youtube-player"
            className="absolute inset-0 transition-opacity duration-500"
          />
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-screen bg-black/50 z-20" />
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#373584] to-transparent z-30">
        <div className="absolute left-16 bottom-10 flex flex-col ">
          <span className="text-white text-xs font-semibold font-['Inter'] leading-tight">
            © 2025 Project Hebi.im. ALL RIGHTS RESERVED.
          </span>
          <span className="text-white text-xs font-light font-['Inter'] leading-tight">
            Hebi.im은 Hebi가 운영하는 공식 사이트가 아닙니다.
          </span>
        </div>
        {isEnded && (
          <>
            {mockMessages.map((message, index) => (
              <div
                key={index}
                className={`absolute right-16 bottom-10 transition-all duration-1000 
                    ${currentIndex === index ? "opacity-100 " : "opacity-0 "}
                  `}
              >
                <div className="flex flex-col gap-3.5">
                  <h1 className="text-white text-4xl font-bold font-['EB_Garamond']">
                    {message.title}
                  </h1>
                  <div className="flex gap-3">
                    <img
                      src="https://cdn.simpleicons.org/youtube/white"
                      width="20"
                      height="20"
                      alt="YouTube에서 보기"
                    />
                    <p className=" text-white text-base font-semibold font-['Inter']">
                      {message.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
