import { Helmet } from "react-helmet";
import AgeLine from "./AgeLine";
import ImageSlider from "./ImageSlider";
import NewProductSwiper from "./NewProductSwiper";
import NoticeSimple from "./NoticeSImple";
import SnsLink from "./SnsLink";
import Youtube from "./Youtube";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>미미월드 | 홈</title>
      </Helmet>
      <section className="w-full h-full py-16 flex flex-col sm:gap-6 md:gap-12 lg:gap-24 ">
        <article>
          <ImageSlider />
        </article>
        <article className="w-[90%] h-full m-auto flex flex-col sm:gap-6 md:gap-12 lg:gap-24">
          <NewProductSwiper />
          <AgeLine />
          <Youtube />
        </article>
        <article className="w-[90%] m-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 m-auto items-center">
            <h2 className="font-mimi text-2xl sm:text-base">
              미미월드의 다양한 SNS 이야기
            </h2>
            <p className="sm:text-sm">고객과 소통하는 미미월드</p>
          </div>
          <div className="w-full flex justify-center lg:gap-6 md:gap-2 sm:gap-1">
            <SnsLink />
            <NoticeSimple />
          </div>
        </article>
      </section>
    </>
  );
}

export default Home;
