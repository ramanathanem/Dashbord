import React, { useState } from 'react';

import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import Logo from "../Assets/Briefcase.png"
import State from "../Assets/StatBoard.png"
import { NavLink } from 'react-router-dom';
import Fetch from '../pages/Fetch';


const Sidebar = ({children}) => {
    
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"Support",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Help",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Plugins",
            
        },
        
     
    ]
    return (
        <div className="container">
            
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img src={Logo}/></h1>
                  
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               
           </div>
     
           <main>{children}</main>
         
        </div>
    );
};

export default Sidebar;