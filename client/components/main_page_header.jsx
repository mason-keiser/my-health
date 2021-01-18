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
        this.alert = this.alert.bind(this);
        this.navbarIcon = this.navbarIcon.bind(this);
    }

    componentDidUpdate() {
      this.navbarIcon()
    }
    componentDidMount() {
      this.navbarIcon()
    }

    handleToggle() {
        if (window.innerWidth < 768) {
          this.setState({ isOpen: !this.state.isOpen });
        }
      }

    alert() {
        window.alert('Medications is currently under construction, Coming Soon!');
    }

    navbarIcon() {
      let span = document.getElementById('navToggle').children;
      let spanObj = span[0].classList;
   
      if (this.state.isOpen == true) {
        span[0].innerText = 'X'
        spanObj.replace('navbar-toggler-icon', 'btn-close')
      } if (this.state.isOpen == false) {
        span[0].innerText = null
        spanObj.replace('btn-close', 'navbar-toggler-icon')
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
                    this.props.setView('main', {})
                    
                  }}
                    className="pointer decoration-none">
                  <h1 className='header-logo img-fluid'> M H ♡</h1>
                  </NavbarBrand>
                  <NavbarToggler onClick={this.handleToggle} navbar="true" className='border-0' id='navToggle'/>
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
                        onClick={this.handleToggle, this.alert}>
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
                        onClick={this.handleToggle, () => this.props.setView('doctors', {})}>
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
                        onClick={this.handleToggle, () => this.props.setView('activities', {})}>
                        Activities
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
                        onClick={this.handleToggle, () => this.props.setView('health_recs', {})}>
                        Health Recommendations
                      </Link>
                    </NavItem> 
                  </Nav>
                </Collapse>
              </Navbar>
            </Container>
        )
    }
}