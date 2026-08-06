import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CategoryGrid from "@/components/CategoryGrid";
import FlashDeals from "@/components/FlashDeals";
import NewArrivals from "@/components/NewArrivals";
import TopPickSection from "@/components/TopPickSection";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <CategoryGrid />
      <FlashDeals />
      <NewArrivals />
      <TopPickSection />
    </>
  );
}
