import Image from "next/image";
import HeroSection from "./Components/HeroSection/Hero";
import RankingList from "./Components/RankingList/RankingList";
import TopHighlights from "./Components/Top-Highlights/TopHighlights";
import HowToRank from "./Components/HowToRank/HowToRank";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";





export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="lg:px-16 sm:px-12 px-6 ">
        <RankingList />
      </div>
        <TopHighlights/>
        <HowToRank/>
        <FAQ/>
        <Footer/>

        
     

        
    </>
  );
}
