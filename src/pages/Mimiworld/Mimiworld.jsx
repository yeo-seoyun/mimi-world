import { Outlet } from "react-router-dom";
import SubNav from "./SubNav";

function Mimiworld() {
  return (
    <>
      <section className="py-16 px-12 flex flex-col">
        <h2 className="font-mimi text-4xl text-center py-5">MIMI WORLD</h2>
        <SubNav />
        <article className="pt-10">
          <Outlet />
        </article>
      </section>
    </>
  );
}

export default Mimiworld;
