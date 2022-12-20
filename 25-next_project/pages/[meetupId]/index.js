import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image="https://cdn3.dpmag.com/2021/07/Landscape-Tips-Mike-Mezeul-II.jpg"
      title="A first MeetupA first Meetup"
      address="address"
      description="this si a first meetup"
    />
  );
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export function getStaticProps(context) {
  // fetch data

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://cdn3.dpmag.com/2021/07/Landscape-Tips-Mike-Mezeul-II.jpg",
        title: "A first MeetupA first Meetup",
        address: "address",
        description: "this si a first meetup",
        id: meetupId,
      },
    },
  };
}

export default MeetupDetails;
