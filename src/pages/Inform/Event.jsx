import { useState, useEffect } from "react";
import pb from "../../api/pocketbase";
import EventCard from "./EventCard";

function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await pb.collection("event_mimi").getFullList({
          sort: "-created",
        });
        setEvents(response);
      } catch (error) {
        console.error("Fetching events failed:", error);
      }
    }

    fetchEvents();
  }, []);

  return (
    <section className="w-full flex flex-col">
      <h2 className="sr-only">이벤트</h2>
      <article>
        {events.map((event) => (
          <div key={event.id} className="w-full flex justify-center mb-5">
            <EventCard event={event} />
          </div>
        ))}
      </article>
    </section>
  );
}

export default Event;
