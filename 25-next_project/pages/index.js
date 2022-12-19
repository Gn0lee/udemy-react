import MeetupList from "../components/meetups/MeetupList";

const dummy_meetups = [
  {
    id: "m1",
    title: "A first Meetup",
    image: "https://cdn3.dpmag.com/2021/07/Landscape-Tips-Mike-Mezeul-II.jpg",
    address: "address",
    description: "this is a first meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={dummy_meetups} />;
}

export default HomePage;
