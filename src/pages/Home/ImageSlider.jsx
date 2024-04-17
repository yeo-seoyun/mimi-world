import { useEffect } from "react";
import { useState } from "react";
import DetailButton from "../../components/atom/DetailButton";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textsVisible, setTextsVisible] = useState(0);
  const count = 2;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % count);
      setTextsVisible((prevText) => (prevText + 1) % count);
    }, 4000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="relative font-mimi lg:h-[80vh] md:h-[30vh]">
      <ul>
        <li
          className={`absolute w-full h-full bg-main-bg1 bg-no-repeat bg-cover transition-opacity bg-slate-400 ${
            currentIndex === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute z-10 flex flex-col gap-4 items-center top-1/3 left-[10%] transform transition-all duration-1000 ${
              textsVisible === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-white text-shadow-pink-glow lg:text-6xl md:text-3xl">
              Be a Princess
            </p>
            <p className="text-[#d85252] lg:text-2xl md:text-xl">
              美美 아름다워라, 아름다워라
            </p>

            <DetailButton to="/brand" label="미미 자세히보기">
              자세히 보기
            </DetailButton>
          </div>
        </li>

        <li
          className={`absolute w-full h-full bg-main-bg2 bg-no-repeat bg-cover transition-opacity ${
            currentIndex === 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute z-10 flex flex-col gap-4 items-center top-1/3 left-[10%] transform transition-all duration-1000 ${
              textsVisible === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-white text-shadow-pink-glow lg:text-6xl md:text-3xl">
              쫑알쫑알 똘똘이
            </h3>
            <p className="text-[#d85252] text-2xl lg:text-center md:text-xl">
              아이주도 역할놀이 완구 브랜드 <br />
              스스로 노는 즐거움이 <b>주체적인 힘</b>으로!
            </p>
            <DetailButton to="/brand/ddolddol" label="미미 자세히보기">
              자세히 보기
            </DetailButton>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ImageSlider;
