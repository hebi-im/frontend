import Image from "next/image";
import Link from "next/link";
import { mockNews } from "@/app/_mock-datas/mockDatas";

export default function LatestNews() {
  return (
    <section className="h-screen flex items-center justify-center snap-start ">
      <div className="flex flex-col items-end gap-8">
        <div className="w-[1200px] flex flex-col gap-8">
          {mockNews.map((news, index) => (
            <Link
              href={news.link}
              key={index}
              className="flex flex-col gap-3 cursor-pointer hover:opacity-70 border-b border-white/50 pb-8"
            >
              <span className="text-white/50 text-base font-normal">
                {news.date}
              </span>
              <h3 className="text-white text-2xl font-normal">{news.title}</h3>
            </Link>
          ))}
        </div>
        <button className="inline-flex justify-start items-center gap-4 cursor-pointer">
          <span className="justify-start text-white text-2xl font-normal font-['EB_Garamond']">
            See All News
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
