import { useHistory } from "react-router-dom";

import QuoteFrom from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push("/quotes");
  };

  return <QuoteFrom onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
