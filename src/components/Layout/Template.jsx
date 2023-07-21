import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Template = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Template;
