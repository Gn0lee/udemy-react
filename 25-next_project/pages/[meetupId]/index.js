import Head from "next/head";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <MeetupDetail
        image={props.image}
        title={props.title}
        address={props.address}
        description={props.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://udemy:udemy@cluster0.ru1bu8s.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  await client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://udemy:udemy@cluster0.ru1bu8s.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId.createFromHexString(meetupId),
  });

  await client.close();

  return {
    props: {
      id: selectedMeetup._id.toString(),
      title: selectedMeetup.title,
      address: selectedMeetup.address,
      description: selectedMeetup.description,
      image: selectedMeetup.image,
    },
  };
}

export default MeetupDetails;
