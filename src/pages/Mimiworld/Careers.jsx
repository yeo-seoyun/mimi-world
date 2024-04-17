function Careers() {
  return (
    <section className="flex flex-col gap-6 items-center">
      <h2 className="font-mimi text-3xl">인재채용</h2>
      <article className="flex flex-col gap-3 w-[90%] h-[50vh]">
        <ul className="flex items-center">
          <li className="bg-tit-icon bg-contain bg-no-repeat bg-center w-8 h-8"></li>
          <li>
            <h2 className="text-2xl">채용절차</h2>
          </li>
        </ul>
        <div className="w-full h-full ">
          <p className="bg-mimi-step bg-contain bg-no-repeat bg-center m-auto w-[80%] h-full"></p>
        </div>
      </article>
      <article className="flex flex-col gap-3 w-[90%] h-[80vh]">
        <ul className="flex items-center">
          <li className="bg-tit-icon bg-contain bg-no-repeat bg-center w-8 h-8"></li>
          <li>
            <h2 className="text-2xl">인재상</h2>
          </li>
        </ul>
        <p className="pl-8">
          아이와 사람을 소중히 여기는 기업! 직원과 가족이 같이 성장하는 기업!{" "}
          <br />
          ㈜미미월드는 아래와 같은 인재를 필요로 합니다.
        </p>
        <div className="w-full h-full ">
          <p className="bg-mimi-talent bg-contain bg-no-repeat bg-center m-auto w-[100%] h-full"></p>
        </div>
      </article>
      <article className="flex flex-col gap-3 w-[90%] h-[80vh]">
        <ul className="flex items-center">
          <li className="bg-tit-icon bg-contain bg-no-repeat bg-center w-8 h-8"></li>
          <li>
            <h2 className="text-2xl">복리후생</h2>
          </li>
        </ul>
        <div className="w-full h-full ">
          <p className="bg-mimi-benefits bg-contain bg-no-repeat bg-center m-auto w-[100%] h-full"></p>
        </div>
      </article>
    </section>
  );
}

export default Careers;
