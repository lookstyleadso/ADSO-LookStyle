import NavBar from "@/components/NavBar";
import Hero from "@/components/homeComps/Hero";
import Services from "@/components/homeComps/Services";
import Guide from "@/components/homeComps/Guide";
import Contest from "@/components/homeComps/Contest";
import Adaptability from "@/components/homeComps/Adaptability";
import BackToComp from "@/components/BackTopComp";
import Footer from "@/components/Footer";
import "@/app/favicon.ico";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Guide />
      <Contest />
      <Adaptability />
      <BackToComp />
      <Footer />
    </>
  );
}
