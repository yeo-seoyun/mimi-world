import React from "react";
import { Link } from "react-router-dom";

function SnsLinkItem({ linkClass, title, description }) {
  const formattedDescription = description.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="lg:w-[17.5rem] md:w-[11.563rem] lg:h-[23.125rem] md:h-[16rem] overflow-hidden bg-slate-50 bg-opacity-40 rounded-md">
      <Link
        className={`${linkClass} bg-no-repeat lg:bg-cover md:bg-cover w-full lg:h-56 md:h-28`}
      ></Link>
      <article
        className="flex flex-col gap-3 lg:p-4 md:p-2 lg:h-full md:h-1/2"
        // style={{ whiteSpace: "pre-line" }}
      >
        <h3 className="font-mimi lg:text-lg md:text-xs">{title}</h3>
        <p className="lg:text-sm md:text-xs">{formattedDescription}</p>
      </article>
    </div>
  );
}

export default SnsLinkItem;
