import { Outlet, ScrollRestoration } from "react-router-dom";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteLayout() {
  return (
    <div>
      <TopBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
