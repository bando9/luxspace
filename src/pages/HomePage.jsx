import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import JustArrived from "../parts/HomePage/JustArrived";
import Clients from "../parts/Clients";
import SiteMap from "../parts/SiteMap";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
    </div>
  );
}
