import ImageSlider from "./ImageSlider";
import NewProductSwiper from "./NewProductSwiper";

function Home() {
  return (
    <section className="py-16">
      <article>
        <ImageSlider />
      </article>
      <article className="w-[1440px] h-[50vh] m-auto">
        <NewProductSwiper />
      </article>
    </section>
  );
}

export default Home;
