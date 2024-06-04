import { Metadata } from "next";
import AuthPage from "./auth/page";

export const metadata: Metadata = {
  title: "App",
};
export default function Home() {
  return (
    <main>
      <section className="h-screen">
        <AuthPage />
      </section>
    </main>
  );
}
