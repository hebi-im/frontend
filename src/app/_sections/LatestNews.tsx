// import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { mockNews } from "@/app/_mock-datas/mockDatas";

// import { ebGaramond } from "@/styles/fonts";
// import { cn } from "@/utils/tailwind-merge";

export default function LatestNews() {
  return (
    <section
      className="h-screen flex items-center justify-center snap-start"
      data-section="news"
      data-section-name="Latest News"
    >
      <div className="flex flex-col items-end gap-8">
        <div className="w-[1200px] flex flex-col gap-8">
          {mockNews.map((news, index) => (
            <a
              href={news.link}
              key={`news-${index.toString()}`}
              className="flex flex-col gap-3 cursor-pointer hover:opacity-70 border-b border-white/50 pb-8"
              target="_blank"
            >
              <span className="text-white/50 text-base font-normal">
                {news.date}
              </span>
              <h3 className="text-white text-2xl font-normal">{news.title}</h3>
            </a>
          ))}
        </div>

        {/* <button className="inline-flex items-center gap-4 cursor-pointer">
          <span className={cn("text-white text-2xl", ebGaramond.className)}>
            See All News
          </span>

          <ArrowRightIcon className="size-6" />
        </button> */}
      </div>
    </section>
  );
}
