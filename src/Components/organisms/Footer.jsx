function Footer() {
  return (
    <>
      <footer className="bg-gray-300 w-full px-12 py-2 text-sm text-gray-100">
        <div className="flex flex-col gap-3">
          <article className="flex justify-between md:flex-col md:items-start lg:flex-row lg:items-center">
            <div>
              <ul className="flex gap-2">
                <li>개인정보취급방침</li> <li>사이트 이용약관</li>
              </ul>
              <ul className="flex gap-2">
                <li>(주) 미미월드</li>
                <li>대표이사 이종열</li>
                <li>사업자등록번호 138-81-03354</li>
                <li>경기도 안양시 동안구 벌말로 102번길 30(관양동)</li>
              </ul>
            </div>
            <ul className="text-end md:text-start">
              <li>고객만족센터 : 080-424-5400 / 031-424-5400</li>
              <li>상담시간 : 월~금(09:00~18:00) 토요일, 공휴일 휴무</li>
            </ul>
          </article>
          <article>
            <p className="text-xs lg:text-start md:text-center">
              Copyright © 2015 MIMI WORLD CO., LTD. All rights reserved.
            </p>
          </article>
        </div>
      </footer>
    </>
  );
}

export default Footer;
