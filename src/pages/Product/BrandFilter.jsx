import { useEffect, useState } from "react";
import ProductCard from "../../components/molecule/ProductCard";
import pb from "../../api/pocketbase";
import MoreButton from "../../components/atom/MoreButton";
import { useSearchParams } from "react-router-dom";

function BrandFilter() {
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
        filterProducts(response, "all", searchQuery);
      } catch (error) {
        console.error("Failed to fetch products: ", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts(allProducts, currentFilter, searchQuery);
  }, [currentFilter, searchQuery, allProducts]);

  useEffect(() => {
    setLoadMore(visibleProducts.length < filteredProducts.length);
  }, [visibleProducts, filteredProducts]);

  const handleLoadMore = () => {
    const newVisibleCount = visibleProducts.length + 8;
    setVisibleProducts(filteredProducts.slice(0, newVisibleCount));
    setLoadMore(newVisibleCount < filteredProducts.length);
  };

  const filterProducts = (products, filter, query) => {
    const filteredByBrand =
      filter === "all"
        ? products
        : products.filter((product) => product.brand === filter);
    const filteredBySearch = query
      ? filteredByBrand.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      : filteredByBrand;
    setFilteredProducts(filteredBySearch);
    setVisibleProducts(filteredBySearch.slice(0, 8));
    setLoadMore(filteredBySearch.length > 8);
  };

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  const isActive = (filter) =>
    currentFilter === filter ? "text-pink-200" : "text-black";

  return (
    <>
      <section className="container mx-auto p-2 sm:p-0 space-y-16 sm:space-y-8">
        <div className="flex justify-center gap-10 mb-6 font-mimi text-lg sm:truncate sm:text-xs sm:flex-row sm:gap-2">
          {[
            "all",
            "미미",
            "미미프렌즈",
            "미미펫샵",
            "똘똘이",
            "글로벌완구",
          ].map((brand) => (
            <button
              key={brand}
              className={isActive(brand)}
              onClick={() => handleFilterChange(brand)}
            >
              {brand === "all" ? "전체" : brand}
            </button>
          ))}
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

export default BrandFilter;
