import {
  Plus_Jakarta_Sans,
  Noto_Serif_JP,
  DM_Serif_Display,
  EB_Garamond,
  Nanum_Myeongjo,
} from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  fallback: ["Pretendard Variable", "Pretendard JP Variable", "sans-serif"],
});

export const notoSerifJp = Noto_Serif_JP({
  weight: "variable",
});

export const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
});

export const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  fallback: ["Nanum Myeongjo", "Noto Serif JP", "serif"],
});

export const ebGaramond = EB_Garamond({
  weight: "variable",
  fallback: ["Nanum Myeongjo", "Noto Serif JP", "serif"],
});
