import { ConfigProvider } from "antd";
import AuthPage from "./auth/page";
import { Metadata } from "next";
import theme from "@/theme";

export const metadata: Metadata = {
  title: "App",
};
export default function Home() {
  return (
    <ConfigProvider theme={theme}>
      <main>
        <section className="h-screen">
          <AuthPage />
        </section>
      </main>
    </ConfigProvider>
  );
}
