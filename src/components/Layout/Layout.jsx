import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  ProfileIcon,
  Main,
  Footer,
  InfoIcon,
} from './Layout.styled';

function Layout() {
  return (
    <Container>
      <Header>
        <Logo to="/">Карти конфлікту</Logo>
        <ProfileIcon to="/">P</ProfileIcon>
      </Header>
      <Main>
        <Suspense
          fallback={
            <div>
              <p>It is fallback for Suspense</p>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </Main>
      <Footer>
        <InfoIcon>i</InfoIcon>
      </Footer>
    </Container>
  );
}

export default Layout;
