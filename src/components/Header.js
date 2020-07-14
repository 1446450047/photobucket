import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import logo from "../assets/images/logo.jpg"
function Header(){
    return(
        <header>
            <h1>Header</h1>
            <img src={logo} alt="logo"/>
            <nav>
                <Link to="/">首页</Link>
                |
                <Link to="/about">关于</Link>
                |
                <Link to="/history">历史记录</Link>
            </nav>
        </header>
    )
}
export {Header}