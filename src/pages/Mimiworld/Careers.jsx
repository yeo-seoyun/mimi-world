import SectionTitle from "../../components/atom/SectionTitle";

function Careers() {
  return (
    <section className="flex flex-col gap-6 items-center">
      <h2 className="font-mimi text-3xl sm:text-xl">인재채용</h2>
      <article className="flex flex-col gap-3 w-[90%] lg:h-[50vh] md:h-[25vh] sm:h-[15vh]">
        <SectionTitle title="채용절차" />
        <div className="w-full h-full ">
          <p className="bg-mimi-step bg-contain bg-no-repeat bg-center m-auto w-[80%] h-full"></p>
        </div>
      </article>
      <article className="flex flex-col lg:gap-3 md:gap-6 sm:gap-3 w-[90%] lg:h-[80vh] md:h-[60vh] sm:h-[40vh]">
        <div className="flex items-start sm:flex-col">
          <SectionTitle title="인재상" />
          <p className="pl-8 sm:pl-0 sm:text-xs">
            아이와 사람을 소중히 여기는 기업! 직원과 가족이 같이 성장하는 기업!{" "}
            <br />
            ㈜미미월드는 아래와 같은 인재를 필요로 합니다.
          </p>
        </div>
        <div className="w-full h-full ">
          <p className="bg-mimi-talent bg-contain bg-no-repeat bg-center m-auto w-[100%] h-full"></p>
        </div>
      </article>
      <article className="flex flex-col gap-3 w-[90%] lg:h-[90vh] md:h-[40vh] sm:h-[30vh]">
        <SectionTitle title="복리후생" />
        <div className="w-full h-full ">
          <p className="bg-mimi-benefits bg-contain bg-no-repeat bg-center m-auto w-[100%] h-full"></p>
        </div>
      </article>
    </section>
  );
}

export default Careers;
