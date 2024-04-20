import { useEffect, useState } from "react";
import ProductCard from "../../components/molecule/ProductCard";
import pb from "../../api/pocketbase";
import MoreButton from "../../components/atom/MoreButton";
import { useSearchParams } from "react-router-dom";

function AgeFilter() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await pb.collection("products_mimi").getFullList({
          sort: "-created",
        });
        setAllProducts(response);
      } catch (error) {
        console.error("상품을 불러올 수 없습니다.🤯🤯", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const newFilteredProducts = allProducts.filter(
      (product) =>
        (currentFilter === "all" || product.age === currentFilter) &&
        (searchQuery === "" ||
          product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    setFilteredProducts(newFilteredProducts);
    setVisibleProducts(newFilteredProducts.slice(0, 8));
    setLoadMore(newFilteredProducts.length > 8);
  }, [searchQuery, currentFilter, allProducts]);

  const handleLoadMore = () => {
    const nextVisibleCount = visibleProducts.length + 8;
    setVisibleProducts(filteredProducts.slice(0, nextVisibleCount));
    setLoadMore(nextVisibleCount < filteredProducts.length);
  };

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  const isActive = (filter) =>
    currentFilter === filter ? "text-pink-200" : "text-black";

  return (
    <>
      <section className="w-[90%] mx-auto p-2 sm:p-0 space-y-16 sm:space-y-8">
        <div className="flex justify-center gap-10 mb-6 font-mimi text-lg sm:truncate sm:text-xs sm:flex-row sm:gap-2">
          <button
            className={isActive("all")}
            onClick={() => handleFilterChange("all")}
          >
            전체
          </button>
          <button
            className={isActive("3")}
            onClick={() => handleFilterChange("3")}
          >
            3세 이상
          </button>
          <button
            className={isActive("5")}
            onClick={() => handleFilterChange("5")}
          >
            5세 이상
          </button>
          <button
            className={isActive("7")}
            onClick={() => handleFilterChange("7")}
          >
            7세 이상
          </button>
        </div>
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

export default AgeFilter;
``;
