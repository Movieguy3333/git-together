export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    title: "React Conference 2026",
    image: "/images/event1.png",
    slug: "react-conf-2026",
    location: "Las Vegas, Nevada",
    date: "May 12-14, 2026",
    time: "9:00 AM - 6:00 PM",
  },
  {
    title: "JavaScript Summit",
    image: "/images/event2.png",
    slug: "js-summit-2026",
    location: "San Francisco, California",
    date: "June 8-10, 2026",
    time: "9:00 AM - 5:00 PM",
  },
  {
    title: "DevOps Days Conference",
    image: "/images/event3.png",
    slug: "devops-days-2026",
    location: "Austin, Texas",
    date: "July 22-23, 2026",
    time: "8:30 AM - 5:30 PM",
  },
  {
    title: "Web Development Hackathon",
    image: "/images/event4.png",
    slug: "web-dev-hackathon-2026",
    location: "New York, New York",
    date: "March 20-22, 2026",
    time: "10:00 AM - 10:00 PM",
  },
  {
    title: "AI & Machine Learning Summit",
    image: "/images/event5.png",
    slug: "ai-ml-summit-2026",
    location: "Seattle, Washington",
    date: "April 15-17, 2026",
    time: "9:00 AM - 6:00 PM",
  },
  {
    title: "TypeScript Global Meetup",
    image: "/images/event6.png",
    slug: "typescript-meetup-2026",
    location: "London, United Kingdom",
    date: "February 28, 2026",
    time: "6:00 PM - 9:00 PM",
  },
];
