import { Wrapper } from './Game.styled';

import { Button } from 'components/Button';
import { GameTable } from 'components/GameTable';
import { CardSet } from 'components/CardSet';
import { useEffect, useState } from 'react';

function Game() {
  const [tableRect, setTableRect] = useState(null);

  useEffect(() => {
    const min = Math.min(document.body.clientWidth, document.body.clientHeight);
    console.log('window.screen changed');
    if (!tableRect) {
      setTableRect({
        width: min,
        height: min * 0.391,
      });
      return;
    }

    if (tableRect.width !== min) {
      setTableRect({
        width: min,
        height: min * 0.391,
      });
    }
  }, [tableRect, setTableRect]);

  return (
    <Wrapper>
      <Button anchor path="/">
        Завершити гру
      </Button>
      {tableRect && <GameTable rect={tableRect} />}
      {/* <CardSet /> */}
    </Wrapper>
  );
}

export default Game;
