import HeroSection from "@/components/HeroSection";
import Category from "@/components/Category";
import NewArrivals from "@/components/NewArrivals";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BestDeals from "@/components/BestDeals";
import { getCategories, getProducts } from "./actions/products";

export default async function Home() {
  const categories = await getCategories();
  const products = await getProducts();

  return (
    <>
      <Header categories={categories}/>
      <HeroSection />
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, #F3EDC9, #FFFFFF)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
        className="mt-0 2xl:mt-16"
      >
        <Category />
      </div>
      <NewArrivals products={products} />
      <BestDeals categories={categories} />
      <Footer />
    </>
  );
}
