import { useEffect, useState } from "react";
import styled from "styled-components";
import QuoteCard from "./components/QuoteCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Button = styled.button`
  background-color: #3b82f6;
  color: #eff6ff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const App = () => {
  const [quote, setQuote] = useState<string>("");
  const [savedQuotes, setSavedQuotes] = useState<string[]>([""]);

  const fetchQuote = async () => {
    const response = await fetch(
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    );
    const data = await response.json();
    setQuote(data[0]);
  };

  const saveQuote = (quote: string) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Container>
      <h1>Ron Swanson Quotes</h1>
      {quote && (
        <QuoteCard quote={quote} onSave={saveQuote}>
          <Button onClick={fetchQuote}>Get New Quote</Button>
        </QuoteCard>
      )}
      <h2>Saved Quotes</h2>
      {savedQuotes.map(
        (q, index) => q !== "" && <QuoteCard key={index} quote={q} />
      )}
    </Container>
  );
};

export default App;
