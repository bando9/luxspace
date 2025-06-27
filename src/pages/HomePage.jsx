import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import JustArrived from "../parts/HomePage/JustArrived";
import Clients from "../parts/Clients";
import SiteMap from "../parts/SiteMap";
import Footer from "../parts/Footer";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home | Luxspace";
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
      <Footer />
    </div>
  );
}
