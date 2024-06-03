"use client";
import { AuthService } from "@/service/indes";
import { IPayloadLogin } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, notification } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "next/link";
import React from "react";

const Index = () => {
  const { mutateAsync: registerPost, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: async ({ email, password, username }: IPayloadLogin) =>
      await AuthService.register(email, password, username),
  });

  const onFinish = (value: IPayloadLogin) => {
    registerPost({
      email: value.email,
      username: value.username,
      password: value.password,
    })
      .then((res) => {
        console.log("res", res);
        notification.info({ message: res?.message });
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };
  return (
    <div className=" h-full p-5">
      <Paragraph className="font-bold text-white text-2xl">Register</Paragraph>
      <Form layout="vertical" onFinish={onFinish}>
        <FormItem
          name="email"
          rules={[
            { required: true, message: "Field is required" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Enter Email" className="h-12" />
        </FormItem>
        <FormItem
          name="username"
          rules={[{ required: true, message: "Field is required" }]}
        >
          <Input placeholder="Create Username" className="h-12" />
        </FormItem>
        <FormItem
          name="password"
          rules={[{ required: true, message: "Field is required" }]}
        >
          <Password placeholder="Create Password" className="h-12" />
        </FormItem>
        <FormItem
          name="passwordConfirm"
          rules={[
            { required: true, message: "Field is required" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Password placeholder="Confirm Password" className="h-12" />
        </FormItem>
        <Button
          loading={isPending}
          disabled={isPending}
          htmlType="submit"
          type="primary"
          className="bg-gradient-btn w-full h-12 font-bold drop-shadow-glow"
        >
          Register
        </Button>
      </Form>
      <Paragraph className="text-white text-center mt-10 font-bold">
        Have an account?{" "}
        <Link
          href={"/auth"}
          className="bg-gradient-gold text-transparent bg-clip-text underline-offset-2"
        >
          Login here
        </Link>
      </Paragraph>
    </div>
  );
};

export default Index;
