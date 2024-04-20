import { useEffect, useState } from "react";
import ProductCard from "../../components/molecule/ProductCard";
import pb from "../../api/pocketbase";
import MoreButton from "../../components/atom/MoreButton";
import { useSearchParams } from "react-router-dom";

function NewProduct() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

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
        const filteredProducts = searchQuery
          ? response.filter((product) =>
              product.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : response.slice(0, 8);
        setVisibleProducts(filteredProducts);
      } catch (error) {
        console.error("상품을 가져오기 실패🤯", error);
      }
    };
    fetchProducts();
  }, [searchQuery]);

  const handleLoadMore = () => {
    const newVisibleProducts = loadMore
      ? products
      : visibleProducts.concat(
          products.slice(visibleProducts.length, visibleProducts.length + 8)
        );
    setVisibleProducts(newVisibleProducts);
    setLoadMore(newVisibleProducts.length >= products.length);
  };

  return (
    <>
      <section className="container mx-auto p-2 sm:p-0 space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4">
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
