import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/molecule/ProductCard";
import pb from "../../api/pocketbase";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await pb
          .collection("products_mimi")
          .getFullList({ sort: "-created" });
        const searchLower = searchQuery.toLowerCase();
        const filtered = response.filter((product) =>
          product.title.toLowerCase().includes(searchLower)
        );
        setFilteredProducts(filtered);
      } catch (error) {
        console.error("상품을 불러올 수 없습니다.🤯🤯:", error);
      }
    };

    if (searchQuery) {
      fetchProducts();
    }
  }, [searchQuery]);

  return (
    <section className="w-full py-16 flex flex-col gap-6 items-center">
      <h2 className="font-mimi pt-10 text-lg">검색 결과</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default SearchPage;
