import serverTranslation from "@/utils/i18n"
import { LocaleTypes } from "@/utils/i18n/settings"
import Image from "next/image"

export default async function GlobalFooter({
  lng,
}: {
  lng: LocaleTypes
}) {
  const { t } = await serverTranslation(lng, "footer")
  return (
    <footer className="snap-end bg-[#0F111F] text-white">
      <div className="container mx-auto flex flex-col items-start justify-start gap-[42px] py-[64px]">
        <Image
          src="https://static.hebi.im/assets/images/2025/03/symbol.webp"
          alt="Hebi."
          width={114}
          height={44}
        />

        <div className="flex w-full flex-col items-start justify-start gap-[18px]">
          <div className="flex w-full flex-col items-start justify-start gap-[8px]">
            <p className="text-base font-bold">
              © 2025 Project Hebi.im. ALL RIGHTS RESERVED.
            </p>
            <p className="text-sm">{t("disclaimer")}</p>
          </div>

          <p className="text-sm">
            Build{" "}
            {process.env.CF_PAGES_COMMIT_SHA?.substring(0, 8) ??
              "develop"}{" "}
            | Contact: <a href="mailto:team@hebi.im">team@hebi.im</a>{" "}
            (Alternatively{" "}
            <a href="mailto:hebi.im@lunaiz.com">hebi.im@lunaiz.com</a>
            ){" "}
          </p>
        </div>
      </div>
    </footer>
  )
}
