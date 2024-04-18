import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import pb from "../../api/pocketbase";

function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    async function fetchFaqs() {
      try {
        const response = await pb
          .collection("faq_mimi")
          .getFullList({ sort: "-created" });
        setFaqs(response);
      } catch (error) {
        console.error("Fetching FAQs failed:", error);
      }
    }

    fetchFaqs();
  }, []);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col gap-10 p-5">
      <h2 className="sr-only">자주 묻는 질문</h2>
      <article className="flex items-center justify-center">
        <input
          type="search"
          id="search"
          placeholder="검색어를 입력하세요"
          className="w-1/3 p-2 border "
        />
        <label htmlFor="search" className="px-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
      </article>

      <article>
        {faqs.map((faq, index) => (
          <div key={faq.id} className="w-[80%] m-auto border-b border-gray-200">
            <h3
              className="p-5 flex justify-between items-center cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              {faq.title}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </h3>
            <div
              className={`overflow-hidden transition-max-height duration-300 ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="p-5 whitespace-pre-line">
                {faq.contents.replace(/\. /g, ".\n\n")}
              </p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Faq;
