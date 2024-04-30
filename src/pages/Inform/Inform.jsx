import { Outlet } from "react-router-dom";
import SubNav from "../../components/molecule/SubNav";
import { Helmet } from "react-helmet";

function Inform() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>미미월드 | 공지사항</title>
      </Helmet>
      <section className="py-16 px-12 sm:px-2 flex flex-col">
        <SubNav
          links={[
            {
              label: "자주 묻는 질문",
              path: "/inform",
              options: { replace: true },
            },
            { label: "공지사항", path: "/inform/notice" },
            { label: "이벤트", path: "/inform/event" },
          ]}
        />
        <article className="pt-10">
          <Outlet />
        </article>
      </section>
    </>
  );
}

export default Inform;
