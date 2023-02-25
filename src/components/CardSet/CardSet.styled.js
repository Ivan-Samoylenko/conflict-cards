import styled from 'styled-components';

export const Set = styled.ul`
  width: 80%;
  height: 45%;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  background-color: rgba(255, 255, 0, 0.05);

  perspective: 1000px;
`;

export const SetItem = styled.li`
  width: 20%;
  height: 80%;

  position: absolute;

  transform: ${p => getSetItemPlace(p.number, p.maxNumber)};
  transition: transform 500ms linear;
`;

function getSetItemPlace(number, maxNumber) {
  if (maxNumber / 2 >= number) {
    return `translate(${number * maxNumber * 20 - maxNumber * 20}%, ${
      15 - number * 5
    }%) rotateX(10deg) rotateZ(${number * 3 - maxNumber * 2}deg)`;
  } else {
    return `translate(${number * maxNumber * 20 - maxNumber * 20}%, ${
      number * 5 - 15
    }%) rotateX(10deg) rotateZ(${number * 3 - maxNumber * 2}deg)`;
  }
}
