import Link from "next/link";
import { mockNews } from "../_mock-datas/mockDatas";
import GlobalFooter from "@/components/GlobalFooter";

const newsArticles = mockNews

export default function NewsPage() {
  return (
    <>
      <main className="max-w-7xl mx-auto pt-32 pb-16">
        <Link href="/" className="flex items-center space-x-2 text-white/70 hover:text-white transition">
          <span className="text-xl">{"←"}</span> 
        </Link>
        <section className="space-y-10 mt-8">
          {newsArticles.map((article, index) => (
            <Link key={index+1} href={`/news/${index+1}`} className="block">
              <article key={index+1} className="w-full border-b pb-5">
                <p className="text-[16px] font-bold text-white/50 pb-2">
                  {article.date}
                </p>
                <h2 className="text-2xl">{` ${article.title}`}</h2>
              </article>
            </Link>
          ))}
        </section>
      </main>
      <GlobalFooter />
      </>
  );
}
