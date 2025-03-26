import Link from "next/link";
import { notFound } from "next/navigation";

const articleDetails = {
  id: 1,
  tag: "이벤트",
  title: "Hebi 위버스 커뮤니티 오픈 기념 이벤트",
  date: "2024-03-20",
  article: `뱀뱀이들을 위한 글로벌 공식 팬 커뮤니티
Hebi 커뮤니티에 오신 것을 환영합니다!

Hebi 커뮤니티에 #WELCOME_Hebi 해시태그와 함께 반가운 환영 인사를 남겨 주세요!
이벤트에 참여해 주신 분들 중 추첨을 통해 선물을 드립니다.

[이벤트 기간]
2025.03.15 (토) PM 12:00 ~ 2025.03.25 (화요일) PM 11:59 (KST)

[증정 선물, 당첨 인원 수]
Hebi 1st Album ‘Chroma’ 싸인 CD / 총 5명

[당첨자 선정 기준]
- 다양한 사진, 영상, 움짤 내용으로 이벤트 참여한 횟수가 높을수록 당첨에 유리합니다.
- 나의 포스트가 ‘좋아요’나 댓글을 많이 받거나, 내가 다른 팬들의 포스트에 ‘좋아요’나 댓글을 많이 남길수록 당첨 확률이 높아집니다.
- 단, 부정한 방법(도배 등 기타 어뷰징 행위)으로 참여할 경우 당첨자 선정에서 제외되거나 당첨이 취소될 수 있습니다.

[당첨자 발표]
2025.04.14(월요일) PM 12:00 (KST)
Hebi 위버스 커뮤니티 공지

[이벤트 참여 방법]
STEP 1. Hebi 커뮤니티에서 #WELCOME_Hebi 해시태그와 함께 Hebi에게 인사 포스트를 남겨주세요!
STEP 2. 다른 팬분들이 남긴 #WELCOME_Hebi 해시태그 포스트에 ‘좋아요’와 댓글을 남겨주세요. 당첨 확률이 높아집니다!

이벤트 유의 사항
1. 이벤트 참여 시, 당첨자 선정을 위해 위버스컴퍼니에서 Hebi 아티스트 레이블 로 이벤트 참여 내역(닉네임, 게시글)이 제공됩니다.
2. 이벤트 당첨자에 한하여, Hebi 아티스트 레이블에 추가적인 개인 정보 (이메일 주소)가 제공됩니다.
- 제공 목적 : Hebi 아티스트 레이블에서 당첨자에게 경품 배송에 필요한 개인정보 (성명/배송지 주소/연락처) 문의
3. 수집한 개인 정보는 경품 배송 목적 외에는 사용되지 않습니다.
- 수집한 개인 정보의 보유 및 이용 기간 : 당첨자 발표 후 응모자는 7일 이내, 당첨자는 1년 이내
4. 이벤트 당첨 후 경품 발송을 위한 개인 정보 제공에 거부를 원하시는 경우 “고객센터”로 거부의사를 접수해주시기 바랍니다. (이벤트 종료 시점까지 거부 의사를 밝히지 않으면 개인 정보 제공에 대한 암묵적 동의로 간주됩니다.)
- 고객센터 접수 방법 : 위버스 앱 우측 하단 더보기 → 고객센터 → 문의하기 → 팬 이벤트
5. 이벤트 및 서비스 관련 메일을 수신하고 발신이 가능한 상태의 계정으로 이벤트에 참여 바랍니다.(이메일 가리기(Hide my email) 등의 기능이 적용되어 이메일 수신/발신이 불가한 계정으로 이벤트에 참여할 경우 당첨자 선정에서 제외되거나 당첨이 취소될 수 있습니다.)
6. 해당 이벤트의 당첨자는 이벤트에 참여하셨을 때의 닉네임과 계정 정보로 발표됩니다. 이벤트 응모 후 닉네임 변경을 지양하여 주시기 바랍니다.
7. 아티스트와 직접적 관련이 없는 콘텐츠를 업로드하거나 서비스 운영 정책에 위반한 활동은 제재를 받을 수 있습니다.
8. 부정한 방법(도배 등 기타 어뷰징 행위)으로 참여할 경우 당첨자 선정에서 제외되거나 당첨이 취소될 수 있습니다.
9. 이벤트 참여 양식에 맞지 않는 글, 욕설과 비방 등 부적절한 내용이 있는 경우 이벤트 당첨자 선정에서 제외되거나 당첨이 취소될 수 있습니다.

`
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const article = articleDetails;

  if (!article) return notFound(); 

  return (
    <main className="max-w-7xl pt-52 pb-16 mx-auto">
      <Link href="/news" className="flex items-center space-x-2 text-white/70 hover:text-white transition">
        <span className="text-xl">{"<-"}</span> 
      </Link>
      <section className="space-y-10 mt-8">

        <div className="border-b pb-5">
          <p className="text-[16px] font-bold text-white/50 pb-2">{article.date}</p>
          <h1 className="text-2xl">{`[${article.tag}] ${article.title}`}</h1>
        </div>

        <article className="prose prose-lg text-white/80 leading-relaxed whitespace-pre-line">
          {article.article}
        </article>
      </section>
    </main>
  );
}