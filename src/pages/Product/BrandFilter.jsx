import { useEffect, useState } from "react";
import ProductCard from "../../components/molecule/ProductCard";
import pb from "../../api/pocketbase";
import MoreButton from "../../components/atom/MoreButton";

function BrandFilter() {
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
        : allProducts.filter((product) => product.brand === currentFilter)
    );
    setVisibleProducts(filteredProducts);
    setLoadMore(true);
  };

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
    const newFilteredProducts =
      filter === "all"
        ? allProducts
        : allProducts.filter((product) => product.brand === filter);

    setFilteredProducts(newFilteredProducts);
    setVisibleProducts(newFilteredProducts.slice(0, 8));
    setLoadMore(false);
  };

  const isActive = (filter) => {
    return currentFilter === filter ? "text-pink-200" : "text-black";
  };

  return (
    <>
      <section className="container mx-auto p-4 space-y-16">
        <div className="flex justify-center gap-10 mb-6 font-mimi text-lg">
          <button
            className={`${isActive("all")}`}
            onClick={() => handleFilterChange("all")}
          >
            전체
          </button>
          <button
            className={`${isActive("미미")}`}
            onClick={() => handleFilterChange("미미")}
          >
            미미
          </button>
          <button
            className={`${isActive("미미프렌즈")}`}
            onClick={() => handleFilterChange("미미프렌즈")}
          >
            미미프렌즈
          </button>
          <button
            className={`${isActive("미미펫샵")}`}
            onClick={() => handleFilterChange("미미펫샵")}
          >
            미미펫샵
          </button>
          <button
            className={`${isActive("똘똘이")}`}
            onClick={() => handleFilterChange("똘똘이")}
          >
            쫑알쫑알 똘똘이
          </button>
          <button
            className={`${isActive("글로벌완구")} `}
            onClick={() => handleFilterChange("글로벌완구")}
          >
            글로벌완구
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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

export default BrandFilter;
