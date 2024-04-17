import { useEffect, useState } from "react";
import pb from "../../api/pocketbase";
import ProductSwiper from "./ProductSwiper";
import SectionTitle from "../../components/atom/SectionTitle";

function MimiPet() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await pb
          .collection("products_mimi")
          .getList(1, 10, { filter: 'brand="미미펫샵"', sort: "-created" });
        setProducts(response.items);
      } catch (error) {
        console.log("상품을 가져오기 실패🤯", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section className="flex flex-col lg:gap-24 md:gap-4 sm:gap-8 items-center">
        <h2 className="font-mimi text-3xl sr-only">미미펫샵</h2>
        <article className="w-[90%] lg:h-[60vh] md:h-[30vh] sm:h-[25vh]">
          <p className="bg-mimi-pet bg-no-repeat bg-contain bg-center w-full h-full"></p>
        </article>
        <article className="w-[90%]">
          <SectionTitle title="브랜드 이야기" />
          <ul className="w-[100%] h-full flex lg:flex-row lg:items-center lg:justify-center gap-16 md:flex-col md:items-center sm:flex-col sm:items-center sm:gap-6 m-auto">
            <li className="bg-mimi-pet-logo bg-contain bg-no-repeat bg-center lg:w-[40%] md:w-[50%] sm:w-[80%] h-40 sm:h-20"></li>
            <li>
              <p className="lg:text-lg md:text-sm flex flex-col gap-3">
                <span>미미펫샵은 '미미월드'의 동물완구 브랜드 입니다</span>
                <span>
                  따라쟁이 앵무, 깡총 아기토끼부터 산책을 좋아하는 공주
                  말티까지!
                  <br />
                  미미펫샵에서 내가 좋아하는 다양한 동물 친구들을 입양해 가족이
                  되어보세요.
                </span>
                <span>
                  함께 재미있게 놀고 아껴주며 반려동물에 대한 책임감과 따뜻한
                  감성이 자라날 거예요.
                </span>
              </p>
            </li>
          </ul>
        </article>
        <article className="w-[90%] lg:h-[60vh] md:h-[40vh] sm:h-[25vh]">
          <SectionTitle title="캐릭터 소개" />
          <div className="bg-mimi-pet-img bg-contain bg-no-repeat bg-center w-full h-full"></div>
        </article>
        <ProductSwiper products={products} />
      </section>
    </>
  );
}

export default MimiPet;
