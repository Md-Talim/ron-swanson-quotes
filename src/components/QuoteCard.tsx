import { ReactNode } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 420px;
  background-color: #0f172a;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 6px;
`;

const Button = styled.button`
  background-color: #93c5fd;
  color: #1e40af;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;

interface Props {
  quote: string;
  children?: ReactNode;
  onSave?: (quote: string) => void;
}

const QuoteCard = ({ quote, onSave, children }: Props) => (
  <Card>
    <p>{quote}</p>
    <ButtonContainer>
      {children}
      {onSave && <Button onClick={() => onSave(quote)}>Save to List</Button>}
    </ButtonContainer>
  </Card>
);

export default QuoteCard;
