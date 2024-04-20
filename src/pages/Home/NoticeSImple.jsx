import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pb from "../../api/pocketbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function NoticeSimple() {
  const [notices, setNotices] = useState([]);

  const navigate = useNavigate();

  const handleNoticeClick = (id) => {
    navigate(`/inform/notice?open=${id}`);
  };

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await pb.collection("notice_mimi").getFullList({
          sort: "-created",
        });
        setNotices(response);
      } catch (error) {
        console.error("공지사항을 가져오기 실패🤯", error);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="flex flex-col gap-6 xl:w-full lg:w-[17.5rem] md:w-[11.563rem] sm:w-20 bg-slate-50 bg-opacity-40 rounded-md p-4 sm:p-1">
      <div className="flex items-center justify-center gap-3 sm:flex-col sm:gap-1">
        <h2 className="font-mimi lg:text-2xl md:text-lg sm:text-xs text-center">
          미미 공지사항
        </h2>
        <Link to="/inform/notice">
          <span>
            <FontAwesomeIcon icon={faPlus} className="sm:text-xs" />
          </span>
        </Link>
      </div>
      {notices.length > 0 ? (
        <ul className="flex flex-col gap-2 sm:hidden">
          {notices.map((notice) => (
            <li
              key={notice.id}
              className="lg:text-lg md:text-sm truncate cursor-pointer hover:font-bold transition-all duration-300"
              onClick={() => handleNoticeClick(notice.id)}
            >
              <FontAwesomeIcon icon={faAngleRight} className="text-sm" />{" "}
              {notice.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>공지사항이 없습니다.</p>
      )}
    </div>
  );
}

export default NoticeSimple;
