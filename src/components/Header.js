import React, {useState} from "react";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Button from "antd/es/button";

const NavHeader = styled.header`
  background-color:#07031a;
  color: #FFF;
  display: flex;
  padding: 10px 100px;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  >h1{
  margin-bottom: 0;
    padding-right: 30px;
    color: #fff;
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
const Login = styled.div`
    margin-left: auto;
      >button{
      margin-left: 1em;
      }
`;

function Header() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <NavHeader>
            <h1>photobucket</h1>
            <nav>
                <NavLink to="/" activeClassName={"active"} exact>首页</NavLink>
                <NavLink to="/history" activeClassName={"active"}>历史记录</NavLink>
                <NavLink to="/about" activeClassName={"active"}>关于我</NavLink>
            </nav>
            <Login>
                {
                    !isLogin ?
                        <>
                            <Button type="primary" size={"middle"}>
                                <Link to="/login" onClick={()=> setIsLogin(true)}>登录</Link>

                            </Button>
                            <Button type="primary" size={"middle"}>
                                <Link to="/register">注册</Link>
                            </Button>
                        </>
                        :
                        <>
                            <span>你好</span>
                            <Button type="primary" size={"middle"} onClick={()=>setIsLogin(false)}>
                                退出
                            </Button>
                        </>

                }

            </Login>
        </NavHeader>
    );
}

export {Header};