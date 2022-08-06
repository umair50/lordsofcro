import Banner from "../../Components/Banner";
import HomeDashboard from "../../Components/HomeDashboard/HomeDashboard";
import banner from "../../assets/homebanner.webp";

import "./index.css";
const Index = () => {
  return (
    <div className="homepage">
      <Banner banner={banner} />
      <HomeDashboard />
    </div>
  );
};
export default Index;
