import type { Metadata, Viewport } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

import "@/styles/globals.css";

import GlobalHeader from "@/components/GlobalHeader";

import { cn } from "@/utils/tailwind-merge";
import { plusJakartaSans } from "@/styles/fonts";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export const metadata: Metadata = {
  // SEO Meta tags
  title: "Hebi. | Unofficial Site",
  description: "#hebi #헤비",
  keywords: ["hebi", "헤비"],

  alternates: {
    canonical: "https://hebi.im",
    languages: {
      ko: "https://hebi.im/ko",
      en: "https://hebi.im/en",
      ja: "https://hebi.im/ja",
    },
  },

  // Opengraph tags
  openGraph: {
    type: "website",
    siteName: "Hebi.",

    title: "Hebi. | Unofficial Site",
    description: "#hebi #헤비",
    url: "https://hebi.im",

    locale: "ko_KR",
    alternateLocale: ["en_US", "ja_JP"],

    images: [
      {
        url: "https://static.hebi.im/assets/images/2025/03/og_image.webp",
        type: "image/webp",
        alt: "Hebi. | Unofficial Site",
      },
    ],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  // Favicons
  icons: {
    icon: "https://static.hebi.im/assets/images/2025/03/favicon.webp",
    shortcut: "https://static.hebi.im/assets/images/2025/03/favicon.webp",
    apple: "https://static.hebi.im/assets/images/2025/03/favicon.webp",
  },

  // Twitter card tags
  twitter: {
    card: "summary_large_image",
    site: "@hebi0211",
    siteId: "hebi0211",

    creator: "@hebi_im",
    creatorId: "hebi_im",

    title: "Hebi. | Unofficial Site",
    description: "#hebi #헤비",

    images: [
      {
        url: "https://static.hebi.im/assets/images/2025/03/og_image.webp",
        type: "image/webp",
        alt: "Hebi. | Unofficial Site",
      },
    ],
  },

  verification: {
    other: {
      "naver-site-verification": "32a23dead0b548f7c6defdd054041ae55e1fd8a7",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,

  themeColor: "#373584",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-jp-dynamic-subset.min.css"
        />
      </head>

      {/* Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-M5CN3F3Q" />

      <body className={cn(plusJakartaSans.className, "antialiased")}>
        <GlobalHeader />
        {children}
      </body>
    </html>
  );
}
