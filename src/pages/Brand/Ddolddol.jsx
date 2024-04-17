import { useEffect, useState } from "react";
import pb from "../../api/pocketbase";
import ProductSwiper from "./ProductSwiper";
import SectionTitle from "../../components/atom/SectionTitle";

function Ddolddol() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await pb
          .collection("products_mimi")
          .getList(1, 10, { filter: 'brand="똘똘이"', sort: "-created" });
        setProducts(response.items);
      } catch (error) {
        console.log("상품을 가져오기 실패🤯", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section className="flex flex-col lg:gap-12 md:gap-4 items-center">
        <h2 className="font-mimi text-3xl sr-only">쫑알쫑알 똘똘이</h2>
        <article className="w-[90%] lg:h-[60vh] md:h-[30vh]">
          <p className="bg-mimi-ddol bg-no-repeat bg-contain bg-center w-full h-full"></p>
        </article>
        <article className="w-[90%] py-9">
          <SectionTitle title="브랜드 이야기" />
          <ul className="w-[70%] h-full flex lg:flex-row lg:items-center lg:justify-center gap-16 md:flex-col md:items-center m-auto">
            <li className="bg-mimi-ddol-logo bg-contain bg-no-repeat bg-center lg:w-[40%] md:w-[50%] h-40"></li>
            <li>
              <p className="lg:text-lg md:text-sm flex flex-col gap-3">
                <span>스스로 노는 즐거움이 주체적인 힘으로!</span>
                <span>
                  아이주도 역할놀이 완구 똘똘이는
                  <br />
                  미미월드 50여년 노하우를 담은 <br />
                  ‘아이주도 시스템(Kid-led)’에 기반하여 설계되었습니다
                </span>
                <span>
                  똘똘이 완구는 아이가 주도적으로 놀이를 <br /> 이끌어 갈 수
                  있는 다양한 장치를 통해
                </span>
                <span>
                  영유아기5대 핵심발달 영역(신체/감성/언어/예술경험/탐구논리)이{" "}
                  <br /> 골고루 통합발달 되어 스스로 주체적 성장을 이룰 수
                  있도록 <br /> 도와줍니다.
                </span>
                <span>
                  언제나 당당하고 자신감 넘치는 똘똘이처럼, <br />
                  똘똘이 완구와 함께 높은 자존감과 주체적인 힘을 가진 <br />
                  아이로 성장하는 것을 경험해보세요!
                </span>
              </p>
            </li>
          </ul>
        </article>
        <article className="w-[90%] lg:h-[60vh] md:h-[40vh] py-9">
          <SectionTitle title="캐릭터 소개" />
          <div className="bg-mimi-ddol-img bg-contain bg-no-repeat bg-center w-full h-full"></div>
        </article>
        <ProductSwiper products={products} />
      </section>
    </>
  );
}

export default Ddolddol;
