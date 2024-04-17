import { Outlet } from "react-router-dom";
import SubNav from "../../components/molecule/SubNav";

function Mimiworld() {
  return (
    <>
      <section className="py-16 px-12 sm:px-2 flex flex-col">
        <h2 className="font-mimi text-4xl text-center py-5">MIMI WORLD</h2>
        <SubNav
          links={[
            {
              label: "회사소개",
              path: "/mimiworld",
              options: { replace: true },
            },
            { label: "CEO인사말", path: "/mimiworld/ceomessage" },
            { label: "인재채용", path: "/mimiworld/careers" },
          ]}
        />
        <article className="pt-10">
          <Outlet />
        </article>
      </section>
    </>
  );
}

export default Mimiworld;
