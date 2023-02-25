import {
  Table,
  TopGameTable,
  BottomGameTable,
  PlayField,
} from './GameTable.styled';

function GameTable() {
  return (
    <Table>
      <BottomGameTable></BottomGameTable>
      <TopGameTable></TopGameTable>
      <PlayField></PlayField>
    </Table>
  );
}

export default GameTable;
