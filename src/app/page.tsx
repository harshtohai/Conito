import Navbar from "@/components/homepage/navbar/navbar";
import Features from "@/components/homepage/features";
import Hero from "@/components/homepage/Hero";
import Footer from "@/components/homepage/footer";
export default function Home() {
  return (
    <main className="bg-text p-[3px]">
      <Navbar />
      <Hero/>
      <Features/>
      <Footer/>
    </main>
  );
}
