import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AboutUs } from "@/components/sections/about-us";
import { ContactUs } from "@/components/sections/contact-us";
import { Foundry } from "@/components/sections/foundry";
import { Hero } from "@/components/sections/hero";
import { IsoCertification } from "@/components/sections/iso-certification";
import { Machining } from "@/components/sections/machining";
import { ManufacturingServices } from "@/components/sections/manufacturing-services";
import { OurStory } from "@/components/sections/our-story";
import { PhotoGallery } from "@/components/sections/photo-gallery";

export default function Home() {
  return (
    <>
      <main className="relative">
        <Header />
        <Hero />
        <OurStory />
        <AboutUs />
        <Machining />
        <Foundry />
        <ManufacturingServices />
        <PhotoGallery />
        <IsoCertification />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
