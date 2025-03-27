import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "static.hebi.im" },
      { hostname: "i.ytimg.com" },
    ],
  },

  experimental: {
    allowedDevOrigins: ["macbook"],
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },

  webpack: config => {
    // @ts-expect-error 타입 에러 무시
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.(".svg"),
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {
          not: [...fileLoaderRule.resourceQuery.not, /url/],
        }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

export default nextConfig
