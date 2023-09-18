import "./NavbarStyles.css";
import { Menuitem }  from "./Menuitem.js";
import{Link} from "react-router-dom";
import { Component } from "react";
import React from 'react'


class Navbar extends Component {
    state ={clicked:false};
    handleClick=()=>{
           this.setState({clicked:!this.state.clicked});
       };
    render() {
        return (

            <nav className="NavbarItems">
         <Link to={'/'}> <h1 className="navbar-logo">Portfolio</h1></Link> 
           <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times":"fas fa-bars"}></i></div>
           <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>
            {Menuitem.map((item,index)=>{
        return(
        <li key={index}>
        <Link className={item.cName} to={item.url}>
            <i className={item.icon}></i>
            {item.title}</Link>
        </li>
        )
            })}
           </ul>
        </nav>
          )
    }
}
export default Navbar;





