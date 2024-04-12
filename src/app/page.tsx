import Navbar from "@/components/homepage/navbar/navbar";
import Features from "@/components/homepage/features";
import Hero from "@/components/homepage/Hero";
import Footer from "@/components/homepage/footer";
import Reviews from "@/components/homepage/reviews";
export default function Home() {
  return (
    <main className="bg-text p-[3px]">
      <Navbar />
      <Hero/>
      <Features/>
      <Reviews/>
      <Footer/>
    </main>
  );
}
