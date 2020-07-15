import React from "react";
import {Form, Input, Button, Checkbox} from "antd";
import styled from "styled-components";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 11,
        span: 24,
    },
};
const H1 = styled.h1`
    margin: 20px auto;
    width: 100px;
    text-align: center;
`;
const validateUserName = (rule, value) => {
    if (/\W/.test(value)) return Promise.reject("只能是字母数字下划线");
    if (value.length < 6 || value.length > 16) return Promise.reject("用户名最大长度为6~16个字符");
};
const validateConfigPassword = ({getFieldValue}) => ({
    validator(rule, value) {
        if (getFieldValue("password") === value) return Promise.resolve;
        return Promise.reject("两次密码不一致,请重新输入");
    }
});

const Register = () => {
    const onFinish = values => {
        console.log("Success:", values);
    };

    const onFinishFailed = errorInfo => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <H1>注册</H1>
            <Form.Item
                label="用户名"
                name="username"
                rules={[
                    {
                        required: true,
                        message: "请输入用户名!",
                    },
                    {
                        validator: validateUserName,
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[
                    {
                        required: true,
                        message: "请输入密码!",
                    },
                    {
                        min: 6,
                        message: "密码至少为6个字符",
                    },
                    {
                        mix: 16,
                        message: "最大为16个字符"
                    },
                ]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item
                label="确认密码:"
                name="configPassword"
                rules={[
                    {
                        required: true,
                        message: "请输入确认密码!",
                    },
                    validateConfigPassword,
                ]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    确认
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Register;