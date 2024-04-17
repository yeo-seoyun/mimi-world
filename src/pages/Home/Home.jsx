import AgeLine from "./AgeLine";
import ImageSlider from "./ImageSlider";
import NewProductSwiper from "./NewProductSwiper";
import NoticeSimple from "./NoticeSImple";
import SnsLink from "./SnsLink";
import Youtube from "./Youtube";

function Home() {
  return (
    <section className="w-full h-full py-16 flex flex-col lg:gap-20 md:gap-12">
      <article>
        <ImageSlider />
      </article>
      <article className="w-[90%] h-full m-auto flex flex-col gap-24">
        <NewProductSwiper />
        <AgeLine />
        <Youtube />
      </article>
      <article className="w-[90%] m-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2 m-auto items-center">
          <h2 className="font-mimi  text-2xl">미미월드의 다양한 SNS 이야기</h2>
          <p>고객과 소통하는 미미월드</p>
        </div>
        <div className="w-full flex lg:gap-6 md:gap-2">
          <SnsLink />
          <NoticeSimple />
        </div>
      </article>
    </section>
  );
}

export default Home;
