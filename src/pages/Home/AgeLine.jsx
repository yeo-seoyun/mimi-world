import { Link } from "react-router-dom";

function AgeLine() {
  return (
    <div className="font-mimi w-full h-full flex flex-col gap-8">
      <h2 className="text-2xl m-auto sm:text-base">Age-Line</h2>
      <div className="flex items justify-center gap-6 sm:gap-2">
        <Link
          to=""
          className="group flex items-center justify-center bg-age-img1 bg-no-repeat bg-cover w-28 sm:w-12 h-28 sm:h-12 rounded-full"
        >
          <span className="opacity-0 group-hover:opacity-100 text-white font-semibold transition-opacity duration-300 w-full h-full bg-black-100 bg-opacity-50  inset-0 flex items-center justify-center rounded-full">
            3~
          </span>
        </Link>
        <Link
          to=""
          className="group flex items-center justify-center bg-age-img2 bg-no-repeat bg-cover w-28 sm:w-12 h-28 sm:h-12 rounded-full"
        >
          <span className="opacity-0 group-hover:opacity-100 text-white font-semibold transition-opacity duration-300 w-full h-full bg-black-100 bg-opacity-50  inset-0 flex items-center justify-center rounded-full">
            3~
          </span>
        </Link>
        <Link
          to=""
          className="group flex items-center justify-center bg-age-img3 bg-no-repeat bg-cover w-28 sm:w-12 h-28 sm:h-12 rounded-full"
        >
          <span className="opacity-0 group-hover:opacity-100 text-white font-semibold transition-opacity duration-300 w-full h-full bg-black-100 bg-opacity-50  inset-0 flex items-center justify-center rounded-full">
            5~
          </span>
        </Link>
        <Link
          to=""
          className="group flex items-center justify-center bg-age-img4 bg-no-repeat bg-cover w-28 sm:w-12 h-28 sm:h-12 rounded-full"
        >
          <span className="opacity-0 group-hover:opacity-100 text-white font-semibold transition-opacity duration-300 w-full h-full bg-black-100 bg-opacity-50  inset-0 flex items-center justify-center rounded-full">
            5~
          </span>
        </Link>
        <Link
          to=""
          className="group flex items-center justify-center bg-age-img5 bg-no-repeat bg-cover w-28 sm:w-12 h-28 sm:h-12 rounded-full"
        >
          <span className="opacity-0 group-hover:opacity-100 text-white font-semibold transition-opacity duration-300 w-full h-full bg-black-100 bg-opacity-50  inset-0 flex items-center justify-center rounded-full">
            7~
          </span>
        </Link>
        <Link
          to=""
          className="group flex items-center justify-center bg-age-img6 bg-no-repeat bg-cover w-28 sm:w-12 h-28 sm:h-12 rounded-full"
        >
          <span className="opacity-0 group-hover:opacity-100 text-white font-semibold transition-opacity duration-300 w-full h-full bg-black-100 bg-opacity-50  inset-0 flex items-center justify-center rounded-full">
            7~
          </span>
        </Link>
      </div>
    </div>
  );
}

export default AgeLine;
