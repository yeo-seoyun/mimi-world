import { useEffect, useState } from "react";
import ProductCard from "../../components/molecule/ProductCard";
import pb from "../../api/pocketbase";
import MoreButton from "../../components/atom/MoreButton";

function AgeFilter() {
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
        setFilteredProducts(response);
        setVisibleProducts(response.slice(0, 8));
      } catch (error) {
        console.error("상품을 가져오기 실패🤯", error);
      }
    };

    fetchProducts();
  }, []);

  const handleLoadMore = () => {
    setVisibleProducts(
      currentFilter === "all"
        ? allProducts
        : allProducts.filter((product) => product.age === currentFilter)
    );
    setVisibleProducts(filteredProducts);
    setLoadMore(true);
  };

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
    const newFilteredProducts =
      filter === "all"
        ? allProducts
        : allProducts.filter((product) => product.age === filter);

    setFilteredProducts(newFilteredProducts);
    setVisibleProducts(newFilteredProducts.slice(0, 8));
    setLoadMore(false);
  };

  const isActive = (filter) => {
    return currentFilter === filter ? "text-pink-200" : "text-black";
  };

  return (
    <>
      <section className="container mx-auto p-2 sm:p-0 space-y-16">
        <div className="flex justify-center gap-10 mb-6 font-mimi text-lg sm:truncate sm:text-xs sm:flex-row sm:gap-2">
          <button
            className={`${isActive("all")}`}
            onClick={() => handleFilterChange("all")}
          >
            전체
          </button>
          <button
            className={`${isActive("3")}`}
            onClick={() => handleFilterChange("3")}
          >
            3세 이상
          </button>
          <button
            className={`${isActive("5")}`}
            onClick={() => handleFilterChange("5")}
          >
            5세 이상
          </button>
          <button
            className={`${isActive("7")}`}
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
        {!loadMore && filteredProducts.length > 8 && (
          <MoreButton onLoadMore={handleLoadMore} />
        )}
      </section>
    </>
  );
}

export default AgeFilter;
