import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

interface Props {
  quote: string;
  onSave?: (quote: string) => void;
}

const QuoteCard = ({ quote, onSave }: Props) => (
  <Card>
    <p>{quote}</p>
    {onSave && <Button onClick={() => onSave(quote)}>Save to List</Button>}
  </Card>
);

export default QuoteCard;
