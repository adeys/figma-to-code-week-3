import Footer from "../components/footer.tsx";
import Header from "../components/header.tsx";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <div className="w-[100vw] overflow-x-hidden min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="py-20 lg:py-0 w-[100vw] ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
