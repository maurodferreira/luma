import { Categories } from "@/components/Categories";
import { Contact } from "@/components/Contact";
import { CtaBand } from "@/components/CtaBand";
import { FeaturedCourse } from "@/components/FeaturedCourse";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { People } from "@/components/People";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <People />
        <Contact />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
