import { Sheet } from './Card.styled';

export default function Card({ text }) {
  return (
    <Sheet>
      <p>{text}</p>
    </Sheet>
  );
}
