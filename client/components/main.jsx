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
import Main_Page_Header from './main_page_header';

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
                <Main_Page_Header/>
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