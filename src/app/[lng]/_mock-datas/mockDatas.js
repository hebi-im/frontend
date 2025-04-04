const mockHeroImages = [
  {
    id: 0,
    src: "https://static.hebi.im/assets/images/2025/03/banner/20250328_ever.webp",
  },
  // {
  //   id: 0,
  //   src: "https://static.hebi.im/assets/images/2025/03/banner/20250309_roadmap.webp",
  // },
  {
    id: 1,
    src: "https://static.hebi.im/assets/images/2025/03/banner/20250314_weverse-open.webp",
  },
  // {
  //   id: 2,
  //   src: "https://static.hebi.im/assets/images/2025/02/banner/20250211_night-sky-patrol-of-tomorrow_001.webp",
  // },
  // {
  //   id: 3,
  //   src: "https://static.hebi.im/assets/images/2025/02/banner/20250211_night-sky-patrol-of-tomorrow_002.webp",
  // },
]

const mockMessages = [
  {
    id: 0,
    title: "'늘 (EVER)' Pre-release Album",
    description:
      "불안한 마음과 그럼에도 불구하고 용기 내어 도전하는 모습을 담아보았어요",
    link: "https://youtu.be/_0f5FjEQzsg",
  },
  // {
  //   id: 0,
  //   title: "Hebi 1st Album - 'Chroma'",
  //   description: "2025.04.22 - 1집 앨범 'Chroma' 발매!",
  //   link: "https://youtu.be/2zmjROFUJOU",
  // },
  {
    id: 1,
    title: "Hebi Weverse Open!",
    description:
      "이제 Hebi의 다양한 소식을 위버스 에서 만나보세요 💖",
    link: "https://weverse.io/hebi/media/3-194433990?hl=ko",
  },
  // {
  //   id: 2,
  //   title: "내일의 밤하늘 초계반",
  //   description: "떨어져 있던 3년간의 마음을 담아 준비했어요",
  //   link: "https://youtu.be/gMjU5XJnc7E",
  // },
  // {
  //   id: 3,
  //   title: "내일의 밤하늘 초계반",
  //   description: "떨어져 있던 3년간의 마음을 담아 준비했어요",
  //   link: "https://youtu.be/gMjU5XJnc7E",
  // },
]

const mockSongs = [
  {
    title: "늘 (EVER)",
    type: "Pre-release Album",
    uploadDate: "2025. 03. 28",
    image:
      "https://static.hebi.im/assets/images/2025/03/discography/1st_single_ever.webp",
    url: "https://www.melon.com/album/detail.htm?albumId=11753420",
  },
  // {
  //   title: "Chroma",
  //   type: "1st Mini Album",
  //   uploadDate: "2025. 04. 22",
  //   image:
  //     "https://static.hebi.im/assets/images/2025/03/discography/1st_single_chroma.webp",
  //   url: "https://www.melon.com/album/detail.htm?albumId=",
  // },
]

const mockVideos = [
  {
    id: 0,
    title: "Hebi - '늘 (EVER)' Official MV",
    uploadDate: "2025. 03. 28",
    video_url: "https://youtu.be/_0f5FjEQzsg",
  },
  {
    id: 1,
    title: "Hebi - 늘 (EVER) Official MV Teaser",
    uploadDate: "2025. 03. 24",
    video_url: "https://youtu.be/hokrG5p7cEY",
  },
  {
    id: 2,
    title: "Hello, this is Hebi.",
    uploadDate: "2025. 03. 17",
    video_url: "https://youtu.be/T6fFMgysK50",
  },
  {
    id: 3,
    title: "Hebi 1st Album Roadmap",
    uploadDate: "2025. 03. 10",
    video_url: "https://youtu.be/2zmjROFUHOU",
  },
  {
    id: 4,
    title: "Night Sky Patrol of Tomorrow / Hebi. cover",
    uploadDate: "2025. 02. 11",
    video_url: "https://youtu.be/gMjU5XJnc7E",
  },

  {
    id: 5,
    title: "霽れを待つ(Orangestar) / Hebi. cover",
    uploadDate: "2021. 03. 07",
    video_url: "https://youtu.be/ZPgGq1OFhPU",
  },
  {
    id: 6,
    title: "泥中に咲く(ウォルピスカーター) / Hebi. cover",
    uploadDate: "2020. 10. 14",
    video_url: "https://youtu.be/7XaLMxc62NQ",
  },

  {
    id: 7,
    title: "第六感 THE SIXTH SENSE (Reol) / Hebi. Remix cover",
    uploadDate: "2020. 10. 06",
    video_url: "https://youtu.be/lZKV0ilNXCc",
  },
  {
    id: 8,
    title: "daybreak frontline (Orangestar) / Hebi. cover",
    uploadDate: "2020. 08. 22",
    video_url: "https://youtu.be/0w6DwANxOWE",
  },
  {
    id: 9,
    title: "春を告げる(Yama) / Hebi. cover",
    uploadDate: "2020. 01. 30",
    video_url: "https://youtu.be/71gpWUEfH1Y",
  },

  {
    id: 10,
    title: "Henceforth(Orangestar) / Hebi. cover",
    uploadDate: "2020. 01. 10",
    video_url: "https://youtu.be/yXl5D2B8nKk",
  },
]

const mockNews = [
  {
    date: "2025. 03. 14",
    title: "[이벤트] Hebi 위버스 커뮤니티 오픈 기념 이벤트",
    link: "https://weverse.io/hebi/notice/25653",
  },
  {
    date: "2025. 03. 14",
    title: "[안내] Hebi. Digital Membership 오픈 안내",
    link: "https://weverse.io/hebi/notice/25684",
  },
  {
    date: "2025. 03. 15",
    title: "[안내] Hebi. 커뮤니티 오픈 및 이용 안내",
    link: "https://weverse.io/hebi/notice/25642",
  },
]

export {
  mockHeroImages,
  mockMessages,
  mockSongs,
  mockVideos,
  mockNews,
}
