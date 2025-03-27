import HebiLogo from "@/assets/logo.svg";

export default function GlobalFooter() {
  return (
    <footer className="bg-[#0F111F] text-white snap-end">
      <div className="container mx-auto flex flex-col justify-start items-start gap-[42px] py-[64px]">
        <HebiLogo height={44} />

        <div className="w-full flex flex-col justify-start items-start gap-[18px]">
          <div className="w-full flex flex-col justify-start items-start gap-[8px]">
            <p className="text-base font-bold">
              © 2025 Project Hebi.im. ALL RIGHTS RESERVED.
            </p>
            <p className="text-sm">
              Hebi.im은 Hebi가 운영하는 공식 사이트가 아닙니다.
            </p>
          </div>

          <p className="text-sm">
            Build{" "}
            {process.env.CF_PAGES_COMMIT_SHA?.substring(0, 8) ?? "develop"} |
            Contact: <a href="mailto:team@hebi.im">team@hebi.im</a>{" "}
            (Alternatively{" "}
            <a href="mailto:hebi.im@lunaiz.com">hebi.im@lunaiz.com</a>)
          </p>
        </div>
      </div>
    </footer>
  );
}
