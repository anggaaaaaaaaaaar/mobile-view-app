import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <div className=" h-full p-5">
      <Paragraph className="font-bold text-white text-2xl">Login</Paragraph>
      <Form layout="vertical">
        <FormItem
          name="email"
          rules={[
            { required: true, message: "Field is required" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Enter Username/Email" className="h-12" />
        </FormItem>
        <FormItem
          name="password"
          rules={[{ required: true, message: "Field is required" }]}
        >
          <Password placeholder="Enter Password" className="h-12" />
        </FormItem>
        <Button
          htmlType="submit"
          type="primary"
          className="bg-gradient-btn w-full h-12 font-bold drop-shadow-glow"
        >
          Login
        </Button>
      </Form>
      <Paragraph className="text-white text-center mt-10 font-bold">
        No account?{" "}
        <Link
          href={"/"}
          className="bg-gradient-gold text-transparent bg-clip-text underline-offset-2"
        >
          Register here
        </Link>
      </Paragraph>
    </div>
  );
};

export default Index;
