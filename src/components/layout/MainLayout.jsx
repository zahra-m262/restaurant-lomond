import "./MainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="container">
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
