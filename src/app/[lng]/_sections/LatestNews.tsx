// import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { mockNews } from "@/app/[lng]/_mock-datas/mockDatas"

// import { ebGaramond } from "@/styles/fonts";
// import { cn } from "@/utils/tailwind-merge";

export default function LatestNews() {
  return (
    <section
      className="flex h-screen snap-start items-center justify-center"
      id="news"
      data-section="Latest News"
    >
      <div className="flex flex-col items-end gap-8">
        <div className="flex w-[1200px] flex-col gap-8">
          {mockNews.map((news, index) => (
            <a
              href={news.link}
              key={`news-${index.toString()}`}
              className="flex cursor-pointer flex-col gap-3 border-b border-white/50 pb-8 hover:opacity-70"
              target="_blank"
            >
              <span className="text-base font-normal text-white/50">
                {news.date}
              </span>
              <h3 className="text-2xl font-normal text-white">
                {news.title}
              </h3>
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
  )
}
