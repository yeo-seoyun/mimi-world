import { useState, useEffect } from "react";
import pb from "../../api/pocketbase";
import AccordionItem from "./AccordionItem,";

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
    <section className="w-full flex flex-col">
      <h2 className="sr-only">자주 묻는 질문</h2>
      <article>
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.id}
            item={faq}
            index={index}
            isOpen={openIndex === index}
            onToggle={toggleItem}
          />
        ))}
      </article>
    </section>
  );
}

export default Faq;
