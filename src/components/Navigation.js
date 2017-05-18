import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './Navigation.sass'

const Navigation = () => (
  <Navbar className='Navbar'>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='#'>
          React-Bootstrap
          <FontAwesome
            className='eye'
            name='eye'
            style={{ textShadow: '0 1px 0 rgba(10, 10, 10, 0.5)' }}
          />
        </a>

      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem eventKey={1} href='#'>Link</NavItem>
      <NavItem eventKey={2} href='#'>Link</NavItem>
    </Nav>
  </Navbar>
)

export default Navigation
