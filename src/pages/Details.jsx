import Header from "../parts/Header";

import Clients from "../parts/Clients";
import SiteMap from "../parts/SiteMap";
import Footer from "../parts/Footer";
import Breadcrumb from "../parts/Breadcrumb";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";

export default function Details() {
  return (
    <div>
      <Header theme="black" />
      <Breadcrumb
        List={[
          { url: "/", name: "Home" },
          { url: "/categories/1234", name: "Office Room" },
          { url: "/categories/1234/products/3412", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <Clients />
      <SiteMap />
      <Footer />
    </div>
  );
}
