import React from "react";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import styled from "styled-components";

const NavHeader = styled.header`
  background-color:#235952;
  color: #FFF;
  display: flex;
  padding: 10px 100px;
  align-items: center;
  >h1{
    padding-right: 30px;
  }
   >nav{
       >a{
          margin-right: 3em;
          color: #fff;   
           &.active{
               border-bottom: 1px solid #fff;
           }
       }
   }
`;

function Header() {
    return (
        <NavHeader>
            <h1>photobucket</h1>
            <nav>
                <NavLink to="/" activeClassName={'active'} exact >首页</NavLink>
                <NavLink to="/history" activeClassName={'active'} >历史记录</NavLink>
                <NavLink to="/about" activeClassName={'active'}  >关于我</NavLink>
            </nav>
        </NavHeader>
    );
}

export {Header};