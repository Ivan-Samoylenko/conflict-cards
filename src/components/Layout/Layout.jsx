import {
  Container,
  Header,
  Logo,
  ProfileIcon,
  Main,
  Footer,
} from './Layout.styled';
import { Button } from 'components/Button';

function Layout() {
  return (
    <Container>
      <Header>
        <Logo to="/">Карти конфлікту</Logo>
        <ProfileIcon to="/">P</ProfileIcon>
      </Header>
      <Main>
        <p>Main</p>
        <Button>Button</Button>
      </Main>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default Layout;
