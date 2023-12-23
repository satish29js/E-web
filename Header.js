import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "./Nav";

function Header() {
  return (
    <MainHeader>
      <NavLink to="/">
        {/* <img
        style={{width:"150px"}}
          src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg"
          alt="No logo Img "
        /> */}
        <h2>Satish.Shop</h2>
      </NavLink>
      <Nav/>
    </MainHeader>
  );
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

export default Header;
