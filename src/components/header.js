import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
const Header = () => {
  return (
    <Nav>
      <NavLink to="/">EXPLORIX</NavLink>
    </Nav>
  )

}


export default Header
const Nav = styled.nav`
  background:red;
  height:80px;
  display:flex;
  justify-content:space-between;
  padding: 0.5rem;
  
`

const NavLink = styled(Link)`

`