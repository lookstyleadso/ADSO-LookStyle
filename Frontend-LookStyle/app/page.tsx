import NavBar from "@/app/homepage/NavBar";
import Hero from "@/app/homepage/Hero";
import Services from "@/app/homepage/Services";
import Guide from "@/app/homepage/Guide";
import Contest from "@/app/homepage/Contest";
import Adaptability from "@/app/homepage/Adaptability";
import BackToComp from "@/app/homepage/BackTopComp";
import Footer from "@/app/homepage/Footer";

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
