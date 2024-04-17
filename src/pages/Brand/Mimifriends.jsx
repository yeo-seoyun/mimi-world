import { useEffect, useState } from "react";
import pb from "../../api/pocketbase";
import ProductSwiper from "./ProductSwiper";
import SectionTitle from "../../components/atom/SectionTitle";

function Mimifriends() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await pb
          .collection("products_mimi")
          .getList(1, 10, { filter: 'brand="미미프렌즈"', sort: "-created" });
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
        <h2 className="font-mimi text-3xl sr-only">프린세스 미미</h2>
        <article className="w-[90%] lg:h-[60vh] md:h-[30vh]">
          <p className="bg-mimi-friends bg-no-repeat bg-contain bg-center w-full h-full"></p>
        </article>
        <article className="w-[90%] h-[40vh] py-9">
          <SectionTitle title="브랜드 이야기" />
          <ul className="w-[70%] h-full flex lg:flex-row lg:items-center lg:justify-center gap-16 md:flex-col md:items-center m-auto">
            <li className="bg-mimi-friends-logo bg-contain bg-no-repeat bg-center w-[30%] h-40"></li>
            <li>
              <p className="lg:text-lg md:text-sm  flex flex-col gap-3">
                <span>
                  초등학생들의 트렌디한 장난감! 미미프렌즈 오직 초등학생들을
                  위해 만들어졌다!
                </span>
                <span>
                  곰손도 금손으로 만들어주는 DIY 완구 오늘은 어디를 꾸며볼까?
                </span>
                <span>
                  꾸미기 아이템 보기만 해도 귀여운 인형과 피규어까지! 다양한
                  아이템들이 가득!
                </span>
                <span>
                  함께하면 더! 즐거운 미미프렌즈 같이 놀자 미미프렌즈!
                </span>
              </p>
            </li>
          </ul>
        </article>
        <article className="w-[90%] lg:h-[60vh] md:h-[40vh] py-9">
          <SectionTitle title="캐릭터 소개" />
          <div className="bg-mimi-friends-img bg-contain bg-no-repeat bg-center w-full h-full"></div>
        </article>
        <ProductSwiper products={products} />
      </section>
    </>
  );
}

export default Mimifriends;
