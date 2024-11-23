import AboutInfo from "../components/About/AboutInfo";
import Header from "../components/Global/Header";
import EarthCard from "../components/About/EarthCard";
import Perks from "../components/About/Perks";
import Faq from "../components/About/Faq";

const About = () => {
  return (
    <>
      <Header />
      <div className="relative">
        <AboutInfo />
        <EarthCard />
        <Perks />
        <Faq />
      </div>
    </>
  );
};

export default About;
