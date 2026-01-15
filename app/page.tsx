import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";

import { events } from "@/lib/constants";

const Page = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br />
        Event You Mustn't Miss
      </h1>
      <p className="text-center mt-5">
        Hackathon, Conferences, Workshops, and more
      </p>

      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard
                image={event.image}
                title={event.title}
                slug={event.slug}
                time={event.time}
                location={event.location}
                date={event.date}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
