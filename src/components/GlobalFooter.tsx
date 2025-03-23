import Image from "next/image";

export default function GlobalFooter() {
  return (
    <footer className="bg-[#0F111F] text-white">
      <div className="container mx-auto flex flex-col justify-start items-start gap-[42px] py-[64px]">
        <Image
          src={"/assets/logo.svg"}
          alt="hebiLogo"
          width={114}
          height={44}
        ></Image>
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
            Build xxxxxxx | Contact: team@hebi.im (Alternatively
            hebi.im@lunaiz.com)
          </p>
        </div>
      </div>
    </footer>
  );
}
