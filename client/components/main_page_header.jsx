import React from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';
  import {
    Link,
    animateScroll as scroll
  } from 'react-scroll';

export default class Main_Page_Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
          };
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        if (window.innerWidth < 768) {
          this.setState({ isOpen: !this.state.isOpen });
        }
      }


    render() {
            let offset = -86;
            if (window.innerWidth < 768) {
              offset = -286;
            }
            
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
              var currentScrollPos = window.pageYOffset;
              if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
              } else {
                document.getElementById("navbar").style.top = "-100px";
              }
            prevScrollpos = currentScrollPos;
            }
            return (
                <Container fluid={true} className="py-3 shadow-md bg-white sticky-top" id="navbar">
                <Navbar color="faded" light
                  expand="md"
                  className="row py-0 nav">
                    <NavbarBrand onClick={() => {
                    scroll.scrollToTop();
                    if (this.state.isOpen) {
                      this.handleToggle();
                    }
                  }}
                    className="pointer decoration-none">
                  <h1 className='header-logo img-fluid'> M H ♡</h1>
                  </NavbarBrand>
                  <NavbarToggler onClick={this.handleToggle} navbar="true" />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto " navbar>
                    <NavItem>
                      <Link activeClass="active"
                        id='item'
                        to=""
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggle}>
                          Medications
                      </Link>
                    </NavItem>
                    <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        id='item'
                        to=""
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggle}>
                        Doctor Info
                      </Link>
                    </NavItem>
                    <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        id='item'
                        to=""
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggle}>
                        Activites
                      </Link>
                    </NavItem>
                    <NavItem className="ml-md-5">
                      <Link activeClass="active"
                        id='item'
                        to=""
                        spy={true}
                        smooth={true}
                        offset={offset}
                        duration={1000}
                        className="pointer px-0 nav-link"
                        onClick={this.handleToggle}>
                        Health Reccomendations
                      </Link>
                    </NavItem> 
                  </Nav>
                </Collapse>
              </Navbar>
            </Container>
        )
    }
}