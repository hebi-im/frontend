import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    tag: "이벤트",
    title: "Hebi 위버스 커뮤니티 오픈 기념 이벤트",
    date: "2024-03-20",
  },
  {
    id: 2,
    tag: "이벤트",
    title: "Hebi 위버스 커뮤니티 오픈 기념 이벤트",
    date: "2024-03-20",
  },
  {
    id: 3,
    tag: "이벤트",
    title: "Hebi 위버스 커뮤니티 오픈 기념 이벤트",
    date: "2024-03-20",
  },
  {
    id: 4,
    tag: "이벤트",
    title: "Hebi 위버스 커뮤니티 오픈 기념 이벤트",
    date: "2024-03-20",
  },
];

export default function NewsPage() {
  return (
    <main className="max-w-7xl mx-auto pt-52 pb-16">
      <Link href="/" className="flex items-center space-x-2 text-white/70 hover:text-white transition">
        <span className="text-xl">{"<-"}</span> 
      </Link>
      <section className="space-y-10 mt-8">
        {newsArticles.map((article) => (
          <Link key={article.id} href={`/news/${article.id}`} className="block">
            <article key={article.id} className="w-full border-b pb-5">
              <p className="text-[16px] font-bold text-white/50 pb-2">
                {article.date}
              </p>
              <h2 className="text-2xl">{`[${article.tag}] ${article.title}`}</h2>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
