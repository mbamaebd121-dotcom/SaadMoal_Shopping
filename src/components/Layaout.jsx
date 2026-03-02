import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import AppRoutes from "./AppRoutes";

function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default Layout;