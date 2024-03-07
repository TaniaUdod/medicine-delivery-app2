import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { Container, Header, Link, Nav } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/">Shop</Link>
          <Link to="/cart">Shopping Cart</Link>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
