import NavBar from "@/app/home/NavBar";
import Hero from "@/app/home/Hero";
import Services from "@/app/home/Services";
import Guide from "@/app/home/Guide";
import Contest from "@/app/home/Contest";
import Adaptability from "@/app/home/Adaptability";
import BackToComp from "@/components/BackTopComp";
import Footer from "@/components/Footer";

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
