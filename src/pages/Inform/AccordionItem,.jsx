import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AccordionItem({ item, index, isOpen, onToggle }) {
  return (
    <div className="w-[80%] sm:w-full m-auto border-b border-gray-200 sm:text-sm">
      <h3
        className="p-5 sm:p-3 flex justify-between items-center cursor-pointer"
        onClick={() => onToggle(index)}
      >
        {item.title}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </h3>
      <div
        className={`overflow-hidden transition-max-height duration-300 px-2 ${
          isOpen ? "h-auto" : "max-h-0"
        }`}
      >
        <p className="px-8 py-4 whitespace-pre-line sm:px-2 sm:py-1">
          {item.contents.replace(/\. /g, ".\n\n")}
        </p>
      </div>
    </div>
  );
}

export default AccordionItem;
