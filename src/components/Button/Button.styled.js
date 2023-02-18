import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { animations } from 'constants';

const glare = keyframes`
  ${animations.glare}
`;

export const StyledButton = styled.button`
  width: 200px;
  height: 60px;
  border: none;

  position: relative;

  font-size: 32px;

  color: ${p => p.theme.colors.color.btn.normal};
  background-color: ${p => p.theme.colors.bcg.btn.normal};

  box-shadow: ${p => p.theme.shadows.box.normalBtn};

  outline: none;
  transition: box-shadow ${p => p.theme.transition};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: ${p => p.theme.colors.bcg.btnBefore.normal};

    transition: background-color ${p => p.theme.transition};
  }

  &:hover,
  &:focus-within {
    &:before {
      animation: ${glare} ${p => p.theme.animation.btnBefore};

      background-color: ${p => p.theme.colors.bcg.btnBefore.hover};
    }
  }

  &:active {
    box-shadow: ${p => p.theme.shadows.box.activeBtn};

    &:before {
      background-color: ${p => p.theme.colors.bcg.btnBefore.active};
    }
  }
`;

export const StyledAnchor = styled(Link)`
  min-width: 200px;
  height: 60px;
  border: none;
  padding-right: 15px;
  padding-left: 15px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 32px;

  color: ${p => p.theme.colors.color.btn.normal};
  background-color: ${p => p.theme.colors.bcg.btn.normal};

  box-shadow: ${p => p.theme.shadows.box.normalBtn};

  outline: none;
  transition: box-shadow ${p => p.theme.transition};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: ${p => p.theme.colors.bcg.btnBefore.normal};

    transition: background-color ${p => p.theme.transition};
  }

  &:hover,
  &:focus-within {
    &:before {
      animation: ${glare} ${p => p.theme.animation.btnBefore};

      background-color: ${p => p.theme.colors.bcg.btnBefore.hover};
    }
  }

  &:active {
    box-shadow: ${p => p.theme.shadows.box.activeBtn};

    &:before {
      background-color: ${p => p.theme.colors.bcg.btnBefore.active};
    }
  }
`;
