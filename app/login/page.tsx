"use client";
import React from "react";
import { Button, Checkbox, Form, type FormProps, Input } from "antd";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "@/firebase/firebase-config";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginPage: React.FC = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [userInfo, setUserInfo] = useState("");
  const handleInputChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const cred = await signInWithEmailAndPassword(
      auth,
      values.username,
      values.password
    );
    setUserInfo(cred as any);
    console.log("login success");
  };
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input onChange={handleInputChange} name="username" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password onChange={handleInputChange} name="password" />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" onClick={handleLogin}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
