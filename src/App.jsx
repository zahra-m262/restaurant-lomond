import { Helmet } from "react-helmet";
import MainLayout from "./components/layout/MainLayOut";

import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Lomond Restaurant</title>
      </Helmet>

      <div style={{ margin: "0 auto" }}>
        <Header />
        <AboutUs />
        <Gallery />
        <Footer />
      </div>
    </MainLayout>
  );
};

export default App;
