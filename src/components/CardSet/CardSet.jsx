import { Set, SetItem } from './CardSet.styled';
import { Card } from 'components/Card';

const cards = [
  { id: 1, text: 'це карта №1' },
  { id: 2, text: 'це карта №2' },
  { id: 3, text: 'це карта №3' },
  { id: 4, text: 'це карта №4' },
  { id: 5, text: 'це карта №5' },
];

export default function CardSet() {
  return (
    <Set>
      {cards.map(({ id, text }, _, arr) => (
        <SetItem key={id} number={id} maxNumber={arr.length}>
          <Card text={text} />
        </SetItem>
      ))}
    </Set>
  );
}
