import GlobalFooter from "@/components/GlobalFooter"
import Hero from "./_sections/Hero"
import LatestNews from "./_sections/LatestNews"
import Discography from "./_sections/Discography"
import Videos from "./_sections/Videos"

export default function Home() {
  return (
    <div
      id="scroll"
      className="h-screen snap-y snap-mandatory overflow-y-scroll"
    >
      <Hero />
      <LatestNews />
      <Discography />
      <Videos />

      <GlobalFooter />
    </div>
  )
}
