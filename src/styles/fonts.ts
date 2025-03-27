/* eslint-disable camelcase */

import {
  Plus_Jakarta_Sans,
  Noto_Serif_JP,
  DM_Serif_Display,
  EB_Garamond,
  Nanum_Myeongjo,
} from "next/font/google"

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext", "cyrillic-ext"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  fallback: [
    "Pretendard Variable",
    "Pretendard JP Variable",
    "sans-serif",
  ],
})

export const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: "variable",
})

export const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
})

export const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  fallback: ["Nanum Myeongjo", "Noto Serif JP", "serif"],
})

export const ebGaramond = EB_Garamond({
  subsets: [
    "latin",
    "latin-ext",
    "greek",
    "greek-ext",
    "cyrillic",
    "cyrillic-ext",
  ],
  weight: "variable",
  fallback: ["Nanum Myeongjo", "Noto Serif JP", "serif"],
})
