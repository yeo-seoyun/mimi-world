import { Link } from "react-router-dom";

function SnsLink() {
  return (
    <div className="font-mimi flex flex-col gap-6 items-center">
      <div className="flex flex-col gap-2 m-auto items-center">
        <h2 className="text-2xl">미미월드의 다양한 SNS 이야기</h2>
        <p>고객과 소통하는 미미월드</p>
      </div>
      <div className="w-full flex items-center justify-center gap-5">
        <Link className="bg-sns-naver bg-no-repeat bg-cover w-80 h-56"></Link>
        <Link className="bg-sns-insta bg-no-repeat bg-cover w-80 h-56"></Link>
        <Link className="bg-sns-youtube bg-no-repeat bg-cover w-80 h-56"></Link>
      </div>
    </div>
  );
}

export default SnsLink;
