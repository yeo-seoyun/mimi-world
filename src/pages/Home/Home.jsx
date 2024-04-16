import AgeLine from "./AgeLine";
import ImageSlider from "./ImageSlider";
import NewProductSwiper from "./NewProductSwiper";
import SnsLink from "./SnsLink";
import Youtube from "./Youtube";

function Home() {
  return (
    <section className="py-16 flex flex-col gap-14">
      <article>
        <ImageSlider />
      </article>
      <article className="w-[90%] m-auto flex flex-col gap-14">
        <NewProductSwiper />
        <AgeLine />
        <Youtube />
        <SnsLink />
      </article>
    </section>
  );
}

export default Home;
