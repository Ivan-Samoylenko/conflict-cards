import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100%;

  position: relative;

  background-color: transparent;
`;

export const Table = styled.div`
  width: 80%;
  height: 160px;

  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  perspective: 800px;
`;

export const TableImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: fill;
`;

export const PlayField = styled.div`
  width: 400px;
  height: 400px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%) rotateX(80deg);

  background-color: #888822;
`;

export const CardSet = styled.div`
  width: 80%;
  height: 320px;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  background-color: rgba(255, 255, 0, 0.05);

  perspective: 100px;
`;
