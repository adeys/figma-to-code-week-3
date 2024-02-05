import Footer from "../components/footer.tsx";
import Header from "../components/header.tsx";
import {Outlet} from "react-router";

export default function Root() {
    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <Header />
            <main className="flex items-center justify-center">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}