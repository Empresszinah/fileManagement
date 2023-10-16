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
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/allCompanies",
            name:"All Companies",
            icon:<FaUserAlt/>
        },
        {
            path:"/newDocument",
            name:"New Document",
            icon:<FaRegChartBar/>
        },
        {
            path:"/folder",
            name:"Folder",
            icon:<FaCommentAlt/>
        },
        {
            path:"/officialAssignment",
            name:"Official Assignment",
            icon:<FaShoppingBag/>
        },
        {
            path:"/Task",
            name:"Task",
            icon:<FaThList/>
        },
        {
            path:"/calender",
            name:"Calender",
            icon:<FaThList/>
        },
        {
            path:"/Account",
            name:"account",
            icon:<FaThList/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeClassName="active">
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