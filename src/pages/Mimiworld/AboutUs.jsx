import SectionTitle from "../../components/atom/SectionTitle";

function AboutUs() {
  return (
    <section className="flex flex-col gap-6 items-center">
      <h2 className="font-mimi text-3xl">좋은 장난감 행복한 아이(I)</h2>
      <article className="flex flex-col gap-3 w-[90%] items-center text-lg">
        <p>
          1973년 7월 작은 완구 소매점으로 시작한 저희 미미월드는 대표 브랜드
          미미인형의 발매히트로 51년 이상 우리나라 어린이들과 함께 꾸준한 성장을
          해왔습니다. <br /> 21세기 미미월드는 미미인형과 똘똘이 인형을 비롯하여
          소꿉완구 및 교육완구 등 여아 완구에서 종합 완구 회사로 거듭나기 위해
          그 영역을 넓혀나가고 있습니다. <br /> 특히 2000년대에는 다양한
          캐릭터를 이용한 새로운 유아, 남아완구를 개발하고 출시하면서 종합완구
          회사의 기틀을 마련하였습니다. <br /> 강력한 브랜드파워와 완구시장을
          리드하는 마케팅 능력 및 자체개발 능력의 조화로 우리나라 완구의 새로운
          지평을 열어가면서 세계로 진출하는 우리나라 대표완구기업이 되기 위해
          끊임없이 노력하겠습니다.
        </p>
        <p>
          미미월드는 이러한 비약적인 성장이 고객 여러분과 협력사 여러분들의
          아낌없는 성원과 사랑 덕분이라 생각하며 고객과 함께하는, 고객의 소리에
          귀 기울이는 모범적인 기업으로 나아갈 것을 약속 드립니다.
        </p>
      </article>
      <article className="flex flex-col gap-5 items-start w-[90%] h-[70vh]">
        <SectionTitle title="조직도" />

        <div className="w-full h-full">
          <p className="bg-emterprise bg-contain bg-no-repeat bg-center w-full h-full"></p>
        </div>
      </article>
      <article className="flex flex-col gap-5 items-start w-[90%] h-[70vh]">
        <SectionTitle title="기업가치" />
        <div className="w-full h-full">
          <p className="bg-organization bg-contain bg-no-repeat bg-center w-full h-full"></p>
        </div>
      </article>
    </section>
  );
}

export default AboutUs;
