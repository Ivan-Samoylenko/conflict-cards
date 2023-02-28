import styled from 'styled-components';

export const Borders = styled.div`
  width: ${p => p.rect.width}px;
  height: ${p => p.rect.height}px;

  position: absolute;
  bottom: 0;
  left: 50%;

  perspective: 2800px;
  transform: translateX(-50%);
  /* transform: translateX(-50%) rotateX(85deg) translateZ(-200px); */
`;

export const TopGameTable = styled.div`
  width: 100%;
  height: 255.7%;
  border: 2px solid #555;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) translateZ(10px) rotateX(70deg);

  background-color: #aaa;

  box-shadow: inset 0 0 200px 50px #555;
  border-radius: 50%;
`;

export const BottomGameTable = styled.div`
  width: 100%;
  height: 255.7%;
  border: 2px solid #444;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) translateZ(10px) rotateX(70deg);

  background-color: #777;
  box-shadow: inset 0 0 200px 50px #444;

  border-radius: 50%;
`;

export const PlayField = styled.div`
  width: 60.9%;
  height: 155.7%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) translateZ(10px) rotateX(70deg);

  background-color: #444;
  box-shadow: inset 0 0 250px 0 #000;
`;
