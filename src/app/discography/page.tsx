import Link from "next/link"
import { mockSongs } from "../_mock-datas/mockDatas"
import GlobalFooter from "@/components/GlobalFooter"
import { ebGaramond } from "@/styles/fonts"
import { cn } from "@/utils/tailwind-merge"

export default function DiscographyPage() {
  return (
    <>
      <main className="mx-auto max-w-7xl pt-32 pb-16">
        <Link
          href="/"
          className="flex items-center space-x-2 text-white/70 transition hover:text-white"
        >
          <span className="text-xl">{"←"}</span>
        </Link>
        <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockSongs.map((song, index) => (
            <Link
              key={index + 1}
              href={`/discography/${+1}`}
              className="block"
            >
              <div className="group relative mx-auto aspect-square w-[90%]">
                <div
                  className="absolute inset-0 rounded-xl bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${song.image})`,
                  }}
                />
                <div className="absolute z-40 h-full w-full rounded bg-black/40 opacity-0 duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-8 left-8 z-50 inline-flex flex-col gap-3 opacity-0 duration-300 group-hover:opacity-100">
                  <div
                    className={cn(
                      "font-semibold text-white",
                      ebGaramond.className,
                    )}
                  >
                    {song.uploadDate}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div
                      className={cn(
                        "text-sm text-white",
                        ebGaramond.className,
                      )}
                    >
                      {song.type}
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {song.title}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <GlobalFooter />
    </>
  )
}
