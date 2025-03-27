import Hero from "./_sections/Hero";
import LatestNews from "./_sections/LatestNews";
import Discography from "./_sections/Discography";
import Videos from "./_sections/Videos";

import GlobalFooter from "@/components/GlobalFooter";

export default function Home() {
  return (
    <div
      id="scroll"
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      <Hero />
      <LatestNews />
      <Discography />
      <Videos />

      <GlobalFooter />
    </div>
  );
}
