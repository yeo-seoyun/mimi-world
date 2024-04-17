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
      <section className="flex flex-col gap-12 items-center">
        <h2 className="font-mimi text-3xl sr-only">미미펫샵</h2>
        <article className="w-[90%] h-[60vh]">
          <p className="bg-mimi-pet bg-no-repeat bg-contain bg-center w-full h-full"></p>
        </article>
        <article className="w-[90%] py-9">
          <SectionTitle title="브랜드 이야기" />
          <ul className="w-[70%] h-full flex items-center justify-center gap-16 m-auto">
            <li className="bg-mimi-pet-logo bg-contain bg-no-repeat bg-center w-[40%] h-40"></li>
            <li>
              <p className="text-lg flex flex-col gap-3">
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
        <article className="w-[90%] h-[60vh] py-9">
          <SectionTitle title="캐릭터 소개" />
          <div className="bg-mimi-pet-img bg-contain bg-no-repeat bg-center w-full h-full"></div>
        </article>
        <ProductSwiper products={products} />
      </section>
    </>
  );
}

export default MimiPet;
