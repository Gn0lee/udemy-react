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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from Api

  return {
    props: {
      meetups: dummy_meetups,
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//
//   // fetch data from API
//
//   return {
//     props: {
//       meetups: dummy_meetups,
//     },
//   };
// }

export default HomePage;
