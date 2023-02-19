import { Wrapper, Table, TableImage, PlayField, CardSet } from './Game.styled';
import table from 'images/table.png';
import { Button } from 'components/Button';

function Game() {
  return (
    <Wrapper>
      <Button anchor path="/">
        Завершити гру
      </Button>
      <Table>
        <TableImage src={table} alt="table" />
        <PlayField></PlayField>
      </Table>
      <CardSet></CardSet>
    </Wrapper>
  );
}

export default Game;
