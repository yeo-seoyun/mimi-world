import { Outlet } from "react-router-dom";
import SubNav from "../../components/molecule/SubNav";

function Product() {
  return (
    <>
      <section className="py-16 px-12 flex flex-col sm:px-2">
        <h2 className="font-mimi text-4xl text-center py-5">미미 상품</h2>
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
        <article className="pt-10 sm:pt-2">
          <Outlet />
        </article>
      </section>
    </>
  );
}

export default Product;
