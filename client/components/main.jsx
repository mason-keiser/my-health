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

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${month} ${date}, ${year}`
}

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
          };
          this.handleToggle = this.handleToggle.bind(this);
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
            <div>
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
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link activeClass="active"
                    to="about"
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
                    to="skills"
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
                    to="tools"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle}>
                    Tools
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link activeClass="active"
                    to="applications"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle}>
                    Applications
                  </Link>
                </NavItem>
                <NavItem className="ml-md-5">
                  <Link activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={1000}
                    className="pointer px-0 nav-link"
                    onClick={this.handleToggle}>
                    Contact
                  </Link>
                </NavItem>  
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
                <h1 className="title" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <h2 className="date m-5">{dateBuilder(new Date())}</h2>
                <h2 className="welcomb">Welcome back, {this.props.user.firstname}</h2>
                <div className="mainB">
                    <button onClick={() => this.props.setView('pain',{})} type='submit' className='btn'>Pain Today</button>
                    <button onClick={() => this.props.setView('pain_history',{})} type='submit' className='btn'>Pain History</button>
                    <button onClick={() => this.props.setView('treatment',{})} type='submit' className='btn'>My Treatment</button>  
                    <button onClick={() => this.props.setView('journal_history',{})} type='submit' className='btn'>Journal</button>  
                </div>
            </div>
        )
    }
}