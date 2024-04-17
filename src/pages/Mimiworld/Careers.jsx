import SectionTitle from "../../components/atom/SectionTitle";

function Careers() {
  return (
    <section className="flex flex-col gap-6 items-center">
      <h2 className="font-mimi text-3xl">인재채용</h2>
      <article className="flex flex-col gap-3 w-[90%] h-[50vh]">
        <SectionTitle title="채용절차" />
        <div className="w-full h-full ">
          <p className="bg-mimi-step bg-contain bg-no-repeat bg-center m-auto w-[80%] h-full"></p>
        </div>
      </article>
      <article className="flex flex-col gap-3 w-[90%] h-[80vh]">
        <div className="flex items-start">
          <SectionTitle title="인재상" />
          <p className="pl-8">
            아이와 사람을 소중히 여기는 기업! 직원과 가족이 같이 성장하는 기업!{" "}
            <br />
            ㈜미미월드는 아래와 같은 인재를 필요로 합니다.
          </p>
        </div>
        <div className="w-full h-full ">
          <p className="bg-mimi-talent bg-contain bg-no-repeat bg-center m-auto w-[100%] h-full"></p>
        </div>
      </article>
      <article className="flex flex-col gap-3 w-[90%] h-[80vh]">
        <SectionTitle title="복리후생" />
        <div className="w-full h-full ">
          <p className="bg-mimi-benefits bg-contain bg-no-repeat bg-center m-auto w-[100%] h-full"></p>
        </div>
      </article>
    </section>
  );
}

export default Careers;
