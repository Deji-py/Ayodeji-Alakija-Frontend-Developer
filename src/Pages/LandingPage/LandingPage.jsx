import Banner_Section from "./Sections/Banner_Section";
import DataGrid_section from "./Sections/DataGrid_section";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function LandingPage() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Banner_Section />
      <DataGrid_section />
      <Footer />
    </div>
  );
}

export default LandingPage;
