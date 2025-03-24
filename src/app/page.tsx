// import Image from "next/image";

import Discography from "./_sections/Discography.";
import LatestNews from "./_sections/LatestNews";
import MainVideo from "./_sections/MainVideo";
import Videos from "./_sections/Videos";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Discography />
      <MainVideo />
      <LatestNews />
      <Videos />
    </div>
  );
}
