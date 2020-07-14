import React from "react";
import {observer} from "mobx-react";
import {useStore} from "../stores";

const Login = observer(() => {
    const {AuthStore} = useStore();
    return (
        <>
            <h1>登录</h1>
        </>
    );
});
export default Login;