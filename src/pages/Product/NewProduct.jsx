import { useEffect, useState } from "react";
import ProductCard from "../../components/molecule/ProductCard";
import pb from "../../api/pocketbase";
import MoreButton from "../../components/atom/MoreButton";

function NewProduct() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await pb.collection("products_mimi").getFullList({
          sort: "-created",
        });
        setProducts(response);
        setVisibleProducts(response.slice(0, 8));
      } catch (error) {
        console.error("상품을 가져오기 실패🤯", error);
      }
    };

    fetchProducts();
  }, []);

  const handleLoadMore = () => {
    setVisibleProducts(products);
    setLoadMore(true);
  };

  return (
    <>
      <section className="container mx-auto p-4 space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {!loadMore && <MoreButton onLoadMore={handleLoadMore} />}
      </section>
    </>
  );
}

export default NewProduct;
