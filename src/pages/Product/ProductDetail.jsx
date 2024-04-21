import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pb from "../../api/pocketbase";
import { getPbImage } from "../../utils/getPbImage";

function ProductDetail() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const product = await pb.collection("products_mimi").getOne(productId);
        setProductData(product);
      } catch (error) {
        console.error("상품을 가져오지 못했습니다.🤯:", error);
      }
    }
    fetchProduct();
  }, [productId]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-[90%] flex flex-col gap-24 sm:gap-12 items-center m-auto">
      <article className="flex flex-col gap-12 sm:gap-6 items-center">
        <img
          src={getPbImage(
            productData.collectionId,
            productData.id,
            productData.detail_img
          )}
          alt={productData.title}
        />
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-4xl sm:text-base">{productData.title}</h2>
          <p className="text-xl sm:text-xs ">{productData.description}</p>
          <p className="sm:text-xs">소비자가격: {productData.price}원</p>
        </div>
        <p className="whitespace-pre-line sm:text-xs">
          {productData.detail.replace(/\. /g, ".\n\n")}
        </p>
      </article>
      <article className="flex flex-col gap-2">
        <h2 className="font-mimi text-xl">상품 상세설명</h2>
        <img
          src={getPbImage(
            productData.collectionId,
            productData.id,
            productData.features
          )}
          alt={productData.title}
        />
      </article>
    </section>
  );
}

export default ProductDetail;
