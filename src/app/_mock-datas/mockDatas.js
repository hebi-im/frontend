const mockEvents = [
  {
    id: 0,
    title: "LILPACON : GOING OUT",
    description: "2024. 07. 12 ~ 2024. 07. 13 | KYUNGHEE UNIVERSITY",
    image_url:
      "https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=2024061708570504999c5fa75ef8612254575.jpg",
  },
  {
    id: 1,
    title: "EVER PURPLE",
    description: "2024. 05. 11",
    image_url: "https://cdn.mhnse.com/news/photo/202405/273495_299518_1220.png",
  },
  {
    id: 2,
    title: "역광",
    description: "2024. 08. 03",
    image_url:
      "https://pbs.twimg.com/media/GUDHFAFbsAAEawV?format=jpg&name=large",
  },
  {
    id: 3,
    title: "LILPACON : GOING OUT",
    description: "2024. 07. 12 ~ 2024. 07. 13 | KYUNGHEE UNIVERSITY",
    image_url:
      "https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=2024061708570504999c5fa75ef8612254575.jpg",
  },
  {
    id: 4,
    title: "EVER PURPLE",
    description: "2024. 05. 11",
    image_url: "https://cdn.mhnse.com/news/photo/202405/273495_299518_1220.png",
  },
];

const mockSongs = [
  {
    title: "이세계아이돌 - 리와인드 (RE:WIND)",
    videos: {
      timeData: {
        start: 0,
        end: 270,
      },
      video: "https://youtu.be/fgSXAKsq-Vo",
      musicVideo: "https://youtu.be/fgSXAKsq-Vo",
      artTrack: "https://youtu.be/ZuttYdmPfzU",
      original: "",
    },
    id: "fgSXAKsq-Vo",
    type: 0,
    genres: ["DANCE"],
    keywords: [],
    uploadDate: "2021-12-21T15:00:11.000Z",
    hearts: 1,
    isHearted: null,
    rank: {
      views: 22592288,
      rank: 0,
    },
  },
  {
    title: "고세구 - 신세계",
    videos: {
      timeData: {
        start: 0,
        end: 240,
      },
      video: "https://youtu.be/exampleSong1",
      musicVideo: "https://youtu.be/exampleSong1",
      artTrack: "https://youtu.be/exampleArtTrack1",
      original: "https://youtu.be/exampleOriginal1",
    },
    id: "rDFUl2mHIW4",
    type: 1,
    genres: ["POP"],
    keywords: ["여름", "노래"],
    uploadDate: "2022-07-10T10:30:00.000Z",
    hearts: 150,
    isHearted: true,
    rank: {
      views: 1234567,
      rank: 1,
    },
  },
  {
    title: "주르르 - 고민중독",
    videos: {
      timeData: {
        start: 0,
        end: 180,
      },
      video: "https://youtu.be/exampleSong2",
      musicVideo: "https://youtu.be/exampleSong2",
      artTrack: "https://youtu.be/exampleArtTrack2",
      original: "https://youtu.be/exampleOriginal2",
    },
    id: "crvPldgKJIo",
    type: 2,
    genres: ["R&B"],
    keywords: ["하늘", "꿈"],
    uploadDate: "2023-05-05T14:00:00.000Z",
    hearts: 200,
    isHearted: false,
    rank: {
      views: 7890123,
      rank: 2,
    },
  },
  {
    title: "릴파 - LADY",
    videos: {
      timeData: {
        start: 0,
        end: 210,
      },
      video: "https://youtu.be/exampleSong3",
      musicVideo: "https://youtu.be/exampleSong3",
      artTrack: "https://youtu.be/exampleArtTrack3",
      original: "https://youtu.be/exampleOriginal3",
    },
    id: "DPEtmqvaKqY",
    type: 1,
    genres: ["BALLAD"],
    keywords: ["별빛", "소원"],
    uploadDate: "2023-09-15T18:45:00.000Z",
    hearts: 300,
    isHearted: null,
    rank: {
      views: 3456789,
      rank: 3,
    },
  },
  {
    title: "아이네 - 부엉이",
    videos: {
      timeData: {
        start: 0,
        end: 240,
      },
      video: "https://youtu.be/exampleSong4",
      musicVideo: "https://youtu.be/exampleSong4",
      artTrack: "https://youtu.be/exampleArtTrack4",
      original: "https://youtu.be/exampleOriginal4",
    },
    id: "S87M2j33Zdw",
    type: 0,
    genres: ["ROCK"],
    keywords: ["추억", "다시"],
    uploadDate: "2024-01-01T09:00:00.000Z",
    hearts: 400,
    isHearted: true,
    rank: {
      views: 4567890,
      rank: 4,
    },
  },
  {
    title: "비챤 - 로키",
    videos: {
      timeData: {
        start: 0,
        end: 300,
      },
      video: "https://youtu.be/exampleSong5",
      musicVideo: "https://youtu.be/exampleSong5",
      artTrack: "https://youtu.be/exampleArtTrack5",
      original: "https://youtu.be/exampleOriginal5",
    },
    id: "l8e1Byk1Dx0",
    type: 1,
    genres: ["EDM"],
    keywords: ["빛나는", "내일"],
    uploadDate: "2023-11-10T20:00:00.000Z",
    hearts: 500,
    isHearted: null,
    rank: {
      views: 9876543,
      rank: 5,
    },
  },
  {
    title: "우왁굳 - HUSH",
    videos: {
      timeData: {
        start: 0,
        end: 240,
      },
      video: "https://youtu.be/exampleSong6",
      musicVideo: "https://youtu.be/exampleSong6",
      artTrack: "https://youtu.be/exampleArtTrack6",
      original: "https://youtu.be/exampleOriginal6",
    },
    id: "6hEvgKL0ClA",
    type: 0,
    genres: ["HIPHOP"],
    keywords: ["세상", "비밀"],
    uploadDate: "2023-02-20T11:15:00.000Z",
    hearts: 600,
    isHearted: true,
    rank: {
      views: 1234567,
      rank: 6,
    },
  },
  {
    title: "뢴트게늄 - 어항",
    videos: {
      timeData: {
        start: 0,
        end: 270,
      },
      video: "https://youtu.be/exampleSong7",
      musicVideo: "https://youtu.be/exampleSong7",
      artTrack: "https://youtu.be/exampleArtTrack7",
      original: "https://youtu.be/exampleOriginal7",
    },
    id: "QgMFpuos4Rg",
    type: 1,
    genres: ["FOLK"],
    keywords: ["사랑", "기억"],
    uploadDate: "2023-08-30T17:30:00.000Z",
    hearts: 700,
    isHearted: null,
    rank: {
      views: 2345678,
      rank: 7,
    },
  },
  {
    title: "고세구 - 팬서비스",
    videos: {
      timeData: {
        start: 0,
        end: 300,
      },
      video: "https://youtu.be/exampleSong8",
      musicVideo: "https://youtu.be/exampleSong8",
      artTrack: "https://youtu.be/exampleArtTrack8",
      original: "https://youtu.be/exampleOriginal8",
    },
    id: "YmELthNomns",
    type: 0,
    genres: ["JAZZ"],
    keywords: ["여정", "희망"],
    uploadDate: "2023-03-25T13:45:00.000Z",
    hearts: 800,
    isHearted: true,
    rank: {
      views: 3456789,
      rank: 8,
    },
  },
  {
    title: "주르르 - 사이언티스트",
    videos: {
      timeData: {
        start: 0,
        end: 180,
      },
      video: "https://youtu.be/exampleSong9",
      musicVideo: "https://youtu.be/exampleSong9",
      artTrack: "https://youtu.be/exampleArtTrack9",
      original: "https://youtu.be/exampleOriginal9",
    },
    id: "--Go33WYnqw",
    type: 1,
    genres: ["CLASSICAL"],
    keywords: ["여정", "희망"],
    uploadDate: "2023-03-25T13:45:00.000Z",
    hearts: 800,
    isHearted: true,
    rank: {
      views: 3456789,
      rank: 9,
    },
  },
  {
    title: "릴파 - 댄스홀",
    videos: {
      timeData: {
        start: 0,
        end: 180,
      },
      video: "https://youtu.be/exampleSong9",
      musicVideo: "https://youtu.be/exampleSong9",
      artTrack: "https://youtu.be/exampleArtTrack9",
      original: "https://youtu.be/exampleOriginal9",
    },
    id: "--Go33WYnqw",
    type: 1,
    genres: ["CLASSICAL"],
    keywords: ["여정", "희망"],
    uploadDate: "2023-03-25T13:45:00.000Z",
    hearts: 800,
    isHearted: true,
    rank: {
      views: 3456789,
      rank: 10,
    },
  },
  {
    title:
      "흠냐링흠냐링흠냐링흠냐링흠냐링흠냐링흠냐링흠냐링흠냐링 - 뭐있더라생각이안난다다다다다다다다다다다다다다뭐있더라생각이안난다다다다다다다다다다다다다다",
    videos: {
      timeData: {
        start: 0,
        end: 180,
      },
      video: "https://youtu.be/exampleSong9",
      musicVideo: "https://youtu.be/exampleSong9",
      artTrack: "https://youtu.be/exampleArtTrack9",
      original: "https://youtu.be/exampleOriginal9",
    },
    id: "--Go33WYnqw",
    type: 1,
    genres: ["CLASSICAL"],
    keywords: ["여정", "희망"],
    uploadDate: "2023-03-25T13:45:00.000Z",
    hearts: 800,
    isHearted: true,
    rank: {
      views: 3456789,
      rank: 11,
    },
  },
];

const mockVideos = [
  {
    id: 0,
    title: "Hebi - EVER Official MV Teaser",
    description: "2024. 05. 11",
    video_url: "https://www.youtube.com/embed/hokrG5p7cEY?si=OPLc7wtO4m-VZmF-",
  },
  {
    id: 1,
    title: "Hello, this is Hebi.",
    description: "2024. 05. 11",
    video_url: "https://www.youtube.com/embed/71gpWUEfH1Y?si=52fHGS9DnejsH1Qw",
  },
  {
    id: 2,
    title: "春を告げる(Yama) / Hebi. cover",
    description: "2024. 05. 11",
    video_url: "https://www.youtube.com/embed/T6fFMgysK50?si=Cylzg61FWUICvDJb",
  },
];

export { mockEvents, mockSongs, mockVideos };
