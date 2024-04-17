import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "../../components/molecule/ProductCard";
import SectionTitle from "../../components/atom/SectionTitle";

function ProductSwiper({ products }) {
  return (
    <article className="w-[90%] h-[60vh] py-9 flex flex-col gap-5">
      <SectionTitle title="상품 소개" />
      <Swiper
        className="w-full"
        spaceBetween={10}
        slidesPerView={2}
        navigation
        modules={[Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}

export default ProductSwiper;
