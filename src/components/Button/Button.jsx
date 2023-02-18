import { StyledButton, StyledAnchor } from './Button.styled';

function Button({ children, anchor = false, path }) {
  return (
    <>
      {!anchor && <StyledButton>{children}</StyledButton>}
      {anchor && <StyledAnchor to={path}>{children}</StyledAnchor>}
    </>
  );
}

export default Button;
