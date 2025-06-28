import Header from "../parts/Header";
import SiteMap from "../parts/SiteMap";
import Footer from "../parts/Footer";
import PageErrorMessage from "../parts/PageErrorMessage";

export default function NotFound() {
  return (
    <div>
      <Header theme="black" />
      <PageErrorMessage />
      <SiteMap />
      <Footer />
    </div>
  );
}
