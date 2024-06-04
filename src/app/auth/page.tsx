"use client";
import { useAuth } from "@/hooks";
import { AuthService } from "@/service";
import { IPayloadLogin } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, notification } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Index = () => {
  const { login } = useAuth();
  const router = useRouter();

  const { mutateAsync: loginPost, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: async ({ email, password, username }: IPayloadLogin) =>
      await AuthService.login(email, password, username),
  });

  const onFinish = (value: IPayloadLogin) => {
    loginPost({
      email: value.email,
      username: value.email,
      password: value.password,
    })
      .then((res) => {
        notification.info({ message: res?.message });
        if (res?.access_token) {
          login({
            access_token: res?.access_token,
            email: value.email,
            username: value.username,
          });
          router.push("/messages");
        }
      })
      .catch((err) => {
        console.log("Err", err);
        notification.error({ message: err?.message });
      });
  };
  return (
    <div className=" h-full p-5">
      <Paragraph className="font-bold text-white text-2xl">Login</Paragraph>
      <Form layout="vertical" onFinish={onFinish}>
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
          loading={isPending}
          disabled={isPending}
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
          href={"/register"}
          className="bg-gradient-gold text-transparent bg-clip-text underline-offset-2"
        >
          Register here
        </Link>
      </Paragraph>
    </div>
  );
};

export default Index;
