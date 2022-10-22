import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "asdfasdfasdfasdf" },
  { id: "q2", author: "dfahg", text: "asdfasdfasdfasdfasdfasdf" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
