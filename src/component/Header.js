import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

const navItems = [
  {
    tag: "Home",
    to: "/",
  },
  {
    tag: "Add User",
    to: "/addUser",
  },
  {
    tag: "About",
    to: "/about",
  },
];

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <MDBNavbar expend="lg" dark bgColor="primary">
        <MDBContainer fluid>
          <MDBNavbarBrand className="text-white">
            <span style={{ marginRight: "10px" }}>
              <MDBIcon fas icon="book-open" />
            </span>
            Contact
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="text-white"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-1g-0">
              {navItems.map((item,index) => {
                return (
                  <MDBNavbarItem key={index}>
                    <MDBNavbarLink className="nav-link">
                      <NavLink to={item.to} className="text-white">
                        {item.tag}
                      </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                );
              })}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Header;
