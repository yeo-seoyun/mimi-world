import SnsLinkItem from "./SnsLinkItem";

function SnsLink() {
  const links = [
    {
      linkClass: "bg-sns-naver",
      title: "네이버 공식카페로 놀러와!",
      description:
        "미미월드 네이버카페에 가입하고 \n미미월드와 베스트 프렌드가 되어봐요! \n다양한 장난감 소식과 미미월드를 \n사랑하는 많은 친구들을 만날 수 있어요!",
    },
    {
      linkClass: "bg-sns-insta",
      title: "오늘의 인스타그램 이벤트!",
      description:
        "미미월드 인스타그램에서 다양하고 재미있는 \n이벤트와 예쁜 이미지를 만나보세요 :) \n이벤트 소식! 재미있는 사진을 한 눈에~!",
    },
    {
      linkClass: "bg-sns-youtube",
      title: "장난감 이야기가 궁금해?",
      description:
        "좋은 장난감으로 아이들에게 행복을 주는 \n미미월드 공식 유튜브 채널입니다 :) \nGood toys, happy kids ❤️",
    },
  ];

  return (
    <div className="flex flex-col gap-6 justify-between">
      <div className="bg-yellwo-100 flex lg:gap-5 md:gap-2">
        {links.map((link) => (
          <SnsLinkItem key={link.title} {...link} />
        ))}
      </div>
    </div>
  );
}

export default SnsLink;
