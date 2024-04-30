import { Outlet, useSearchParams } from "react-router-dom";
import SubNav from "../../components/molecule/SubNav";
import SearchInput from "../../components/atom/SearchInput";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );

  useEffect(() => {
    const query = searchParams.get("search") || "";
    setSearchQuery(query);
  }, [searchParams]);

  // 검색어 변경 호출함수
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // 검색어 실행 함수
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ search: searchQuery });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>미미월드 | 상품</title>
      </Helmet>
      <section className="py-16 px-12 flex flex-col sm:px-2">
        <h2 className="font-mimi text-4xl text-center py-5">미미 상품</h2>
        <div className="flex items-center justify-between sm:flex-col">
          <SubNav
            links={[
              {
                label: "신상품",
                path: "/product",
                options: { replace: true },
              },
              { label: "브랜드별", path: "/product/brandfilter" },
              { label: "연령별", path: "/product/agefilter" },
            ]}
          />
          <SearchInput
            value={searchQuery}
            onChange={handleSearchChange}
            onSubmit={handleSearchSubmit}
          />
        </div>
        <article className="w-full pt-10 sm:pt-5">
          <Outlet context={{ searchQuery, setSearchQuery }} />
        </article>
      </section>
    </>
  );
}

export default Product;
