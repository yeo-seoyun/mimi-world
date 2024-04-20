import { useState, useEffect } from "react";
import pb from "../../api/pocketbase";
import AccordionItem from "./AccordionItem,";
import { useLocation } from "react-router-dom";

function Notice() {
  const [notices, setNotices] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    async function fetchNotices() {
      try {
        const response = await pb
          .collection("notice_mimi")
          .getFullList({ sort: "-created" });
        setNotices(response);
      } catch (error) {
        console.error("공지사항을 가져올 수 없습니다😵‍💫:", error);
      }
    }

    fetchNotices();
  }, []);

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const openId = queryParams.get("open");

    if (openId) {
      const index = notices.findIndex((notice) => notice.id === openId);
      setOpenIndex(index);
    }
  }, [location, notices]);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col">
      <h2 className="sr-only">공지사항</h2>
      <article>
        {notices.map((notice, index) => (
          <AccordionItem
            key={notice.id}
            item={notice}
            index={index}
            isOpen={openIndex === index}
            onToggle={toggleItem}
          />
        ))}
      </article>
    </section>
  );
}

export default Notice;
