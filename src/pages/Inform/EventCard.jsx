import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPbImage } from "../../utils/getPbImage";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="w-[70%] md:w-full flex items-start justify-center gap-2 sm:flex-col border">
      <img
        src={getPbImage(event.collectionId, event.id, event.photo)}
        alt="Event"
        className="w-64 md:w-1/3 h-auto object-cover"
      />
      <div className="w-full p-2 h-64 flex flex-col sm:gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-sm font-bold mb-2">{event.title}</h2>
          <Link
            to="https://www.instagram.com/mimiworld_official/"
            aria-label="미미월드 인스타그램"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-2xl px-8 sm:px-0"
            />
          </Link>
        </div>
        <p className="text-sm sm:text-xs overflow-y-auto text-ellipsis whitespace-pre-wrap px-4">
          {event.contents.replace(/\. /g, ".\n\n")}
        </p>
      </div>
    </div>
  );
}

export default EventCard;
