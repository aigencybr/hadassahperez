import Hero from "@/components/sections/Hero";
import TaglineBar from "@/components/sections/TaglineBar";
import Identification from "@/components/sections/Identification";
import Problem from "@/components/sections/Problem";
import Cycles from "@/components/sections/Cycles";
import Differentials from "@/components/sections/Differentials";
import Transformation from "@/components/sections/Transformation";
import Discipline from "@/components/sections/Discipline";
import Author from "@/components/sections/Author";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TaglineBar />
      <Identification />
      <Problem />
      <Cycles />
      <Differentials />
      <Transformation />
      <Discipline />
      <Pricing />
      <Author />
      {/* <Testimonials /> */}
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
