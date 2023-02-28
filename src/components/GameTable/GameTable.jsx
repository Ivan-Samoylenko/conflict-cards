import {
  Borders,
  TopGameTable,
  BottomGameTable,
  PlayField,
} from './GameTable.styled';

function GameTable({ rect }) {
  return (
    <Borders rect={rect}>
      <BottomGameTable></BottomGameTable>
      <TopGameTable></TopGameTable>
      <PlayField></PlayField>
    </Borders>
  );
}

export default GameTable;
