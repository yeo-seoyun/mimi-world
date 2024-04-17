import { Outlet } from "react-router-dom";
import SubNav from "../../components/molecule/SubNav";

function Brand() {
  return (
    <>
      <section className="py-16 px-12 sm:px-2 flex flex-col">
        <h2 className="font-mimi text-4xl text-center py-5">미미 브랜드</h2>
        <SubNav
          links={[
            {
              label: "프린세스 미미",
              path: "/brand",
              options: { replace: true },
            },
            { label: "미미프렌즈", path: "/brand/mimifriends" },
            { label: "미미펫샵", path: "/brand/mimipet" },
            { label: "쫑알쫑알 똘똘이", path: "/brand/ddolddol" },
          ]}
        />
        <article className="pt-10">
          <Outlet />
        </article>
      </section>
    </>
  );
}

export default Brand;
