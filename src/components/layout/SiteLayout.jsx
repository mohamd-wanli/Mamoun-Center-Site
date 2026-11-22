import { Outlet, ScrollRestoration } from "../../i18n/navigation.jsx";
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
