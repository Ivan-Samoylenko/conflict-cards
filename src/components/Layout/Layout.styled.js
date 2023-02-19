import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-width: 280px;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;

  display: flex;
  flex-direction: column;

  background-color: #555544;
`;

export const Header = styled.header`
  width: 100%;
  min-height: 60px;
  padding-right: 15px;
  padding-left: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #333;
`;

export const Logo = styled(Link)`
  font-size: 28px;
  font-weight: 700;

  outline: none;

  &:hover,
  &:focus-within {
    color: #eee;

    text-shadow: ${p => p.theme.shadows.text.logo};
  }
`;

export const ProfileIcon = styled(Link)`
  width: 28px;
  height: 28px;

  display: block;

  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;

  color: #000;
  background-color: #ccc;

  border-radius: 50%;
  outline: none;

  &:hover,
  &:focus-within {
    background-color: #eee;

    box-shadow: ${p => p.theme.shadows.box.profileIcon};
  }
`;

export const Main = styled.main`
  flex-grow: 1;

  background-color: #111;

  overflow: hidden;
`;

export const Footer = styled.footer`
  min-height: 60px;
  padding-right: 15px;
  padding-left: 15px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: #333;
`;

export const InfoIcon = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  padding: 0;

  display: block;

  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;

  color: #000;
  background-color: #ccc;

  border-radius: 50%;
  outline: none;

  &:hover,
  &:focus-within {
    background-color: #eee;

    box-shadow: ${p => p.theme.shadows.box.profileIcon};
  }
`;
