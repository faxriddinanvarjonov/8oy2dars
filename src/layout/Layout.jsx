import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import "./Layout.css";

function Layout({ children }) {
  return (
    <section className="LayoutSection">
      <SideBar />
      <div className="contentWrapper">
        <Header />
        {children}
      </div>
    </section>
  );
}

export default Layout;
