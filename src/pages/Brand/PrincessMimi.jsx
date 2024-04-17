import { useEffect, useState } from "react";
import pb from "../../api/pocketbase";
import ProductSwiper from "./ProductSwiper";
import SectionTitle from "../../components/atom/SectionTitle";

function PrincessMimi() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await pb
          .collection("products_mimi")
          .getList(1, 10, { filter: 'brand="미미"', sort: "-created" });
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
        <h2 className="font-mimi text-3xl sr-only">프린세스 미미</h2>
        <article className="w-[90%] lg:h-[60vh] md:h-[30vh] sm:h-[25vh]">
          <p className="bg-mimi-princess bg-no-repeat bg-contain bg-center w-full h-full"></p>
        </article>
        <article className="w-[90%]">
          <SectionTitle title="브랜드 이야기" />
          <ul className="w-[100%] h-full flex lg:flex-row lg:items-center lg:justify-center gap-16 md:flex-col md:items-center sm:flex-col sm:items-center sm:gap-6 m-auto">
            <li className="bg-mimi-princess-logo bg-contain bg-no-repeat bg-center lg:w-[40%] md:w-[50%] sm:w-[80%] h-40 sm:h-20"></li>
            <li>
              <p className="lg:text-lg md:text-sm flex flex-col gap-3">
                <span>대한민국 여자 어린이의 영원한 친구 프린세스 미미</span>
                <span>
                  미미(美美)는 "아름다워라, 아름다워라"란 의미로 1982년 탄생한{" "}
                  <br />
                  대한민국 최초의 패션 인형입니다.
                </span>
                <span>
                  미미를 가지고 놀던 어린 소녀가 예쁜 딸의 엄마가 되는 <br />{" "}
                  40여 년의 시간 동안 미미는 대한민국 어린이들의 꿈을 대신해
                  주는 매개체였습니다.
                </span>
                <span>
                  공주가 되고 싶을 땐 프린세스 미미 <br /> 패셔니스트가 되고
                  싶을 땐 패션 미미 <br /> 미미는 닮고 싶고 언제나 함께하고 싶은
                  친구입니다.
                </span>
              </p>
            </li>
          </ul>
        </article>
        <article className="w-[90%] lg:h-[60vh] md:h-[40vh] sm:h-[25vh]">
          <SectionTitle title="캐릭터 소개" />
          <div className="bg-mimi-princess-doll bg-contain bg-no-repeat bg-center w-full h-full"></div>
        </article>
        <ProductSwiper products={products} />
      </section>
    </>
  );
}

export default PrincessMimi;
