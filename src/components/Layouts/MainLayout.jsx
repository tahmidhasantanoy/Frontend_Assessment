import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Container from "../UI/Container";
import Sidebar from "../UI/Sidebar";

const MainLayout = () => {
  return (
    <Container>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex .flex-1">
          {/* Sidebar */}
          <div className="hidden sm:hidden md:block lg:block bg-white">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 lg:px-6 lg:pb-6">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
};

export default MainLayout;
