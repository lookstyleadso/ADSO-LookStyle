import NavBar from "@/components/NavBar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Guide from "@/components/home/Guide";
import Contest from "@/components/home/Contest";
import Adaptability from "@/components/home/Adaptability";
import BackToComp from "@/components/BackTopComp";
import Footer from "@/components/Footer";
import '@/app/favicon.ico'

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
