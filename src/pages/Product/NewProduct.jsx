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
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await pb
          .collection("products_mimi")
          .getFullList({ sort: "-created" });
        setProducts(response);
        updateVisibleProducts(response, searchQuery);
      } catch (error) {
        console.error("상품을 불러올 수 없습니다.🤯🤯: ", error);
      }
    };
    fetchProducts();
  }, [searchQuery]);

  const updateVisibleProducts = (allProducts, query) => {
    const filteredProducts = query
      ? allProducts.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      : allProducts;
    setVisibleProducts(filteredProducts.slice(0, 8));
    setLoadMore(filteredProducts.length > 8);
  };

  const handleLoadMore = () => {
    const currentLength = visibleProducts.length;
    const additionalProducts = products.filter(
      (product) =>
        searchQuery === "" ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const newVisibleProducts = additionalProducts.slice(0, currentLength + 8);
    setVisibleProducts(newVisibleProducts);
    setLoadMore(newVisibleProducts.length < additionalProducts.length);
  };

  return (
    <>
      <section className="w-[90%] mx-auto p-2 sm:p-0 space-y-16 sm:space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {loadMore && <MoreButton onLoadMore={handleLoadMore} />}
      </section>
    </>
  );
}

export default NewProduct;
