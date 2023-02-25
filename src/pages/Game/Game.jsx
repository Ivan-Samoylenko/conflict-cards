import { Wrapper } from './Game.styled';

import { Button } from 'components/Button';
import { GameTable } from 'components/GameTable';
import { CardSet } from 'components/CardSet';

function Game() {
  return (
    <Wrapper>
      <Button anchor path="/">
        Завершити гру
      </Button>
      <GameTable />
      <CardSet />
    </Wrapper>
  );
}

export default Game;
