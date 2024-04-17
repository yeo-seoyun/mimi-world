import { useEffect, useState } from "react";
import pb from "../../api/pocketbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function NoticeSimple() {
  const [notices, setNotices] = useState([]);

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
    <div className="w-1/3 bg-slate-50 bg-opacity-40 rounded-md p-4">
      <div className="flex items-center justify-center gap-3">
        <h2 className="font-mimi text-2xl text-center">미미 공지사항</h2>
        <Link to="/notice">
          <span>
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </Link>
      </div>
      {notices.length > 0 ? (
        <ul>
          {notices.map((notice) => (
            <li key={notice.id}>{notice.title}</li>
          ))}
        </ul>
      ) : (
        <p>공지사항이 없습니다.</p>
      )}
    </div>
  );
}

export default NoticeSimple;
