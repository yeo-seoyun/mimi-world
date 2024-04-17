import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import pb from "../../api/pocketbase";
import ProductCard from "../../components/molecule/ProductCard";
import { Navigation } from "swiper/modules";
import DetailButton from "../../components/atom/DetailButton";

function NewProductSwiper() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await pb
          .collection("products_mimi")
          .getList(1, 10, { sort: "-created" });
        setProduct(response.items);
        // console.log(response);
      } catch (error) {
        console.log("상품을 가져오기 실패🤯", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-8">
      <div className="flex flex-col gap-2 m-auto items-center font-mimi">
        <h2 className="text-2xl">영원한 나의 친구!</h2>
        <p>미미월드 프랜즈 만나보기</p>
        <DetailButton>자세히 보기</DetailButton>
      </div>
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
        {product.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewProductSwiper;
