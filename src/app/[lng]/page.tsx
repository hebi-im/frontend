import { LocaleTypes } from "@/utils/i18n/settings"
import GlobalFooter from "@/components/GlobalFooter"
import Hero from "./_sections/Hero"
import LatestNews from "./_sections/LatestNews"
import Discography from "./_sections/Discography"
import Videos from "./_sections/Videos"

export default async function Home({
  params,
}: {
  params: Promise<{ lng: LocaleTypes }>
}) {
  const { lng } = await params
  return (
    <div
      id="scroll"
      className="h-screen snap-y snap-mandatory overflow-y-scroll"
    >
      <Hero lng={lng} />
      <LatestNews />
      <Discography />
      <Videos />

      <GlobalFooter lng={lng} />
    </div>
  )
}
