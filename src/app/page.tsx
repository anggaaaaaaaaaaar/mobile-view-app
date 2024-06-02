import Image from "next/image";
import { AuthPage } from "./pages";
import { ConfigProvider } from "antd";
import theme from "@/app/theme";

export default function Home() {
  return (
    <ConfigProvider theme={theme}>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <section className="h-screen w-full max-w-md">
          <AuthPage />
        </section>
      </main>
    </ConfigProvider>
  );
}
