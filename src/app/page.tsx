import AboutSection from "@/components/homepage/sections/aboutSection";
import BeritaSection from "@/components/homepage/sections/beritaSection";
import Footer from "@/components/homepage/sections/footer";
import MenuBodySection from "@/components/homepage/sections/menuBodySection";
import PelayananSection from "@/components/homepage/sections/pelayananSection";
import ContactBar from "@/components/homepage/ui/contactBar";
import HeroSection from "@/components/homepage/ui/ImageSlider";
import ScrollToTopButton from "@/components/homepage/ui/ScrollWidgetToTop";
import { beritaData, BoyMenus, SLIDES } from "@/lib/homepage/constants";

export default function Home() {
  return (
    <>
      <HeroSection slides={SLIDES} />
      <AboutSection />
      <ContactBar />
      <MenuBodySection menus={BoyMenus} />
      <PelayananSection />
      <BeritaSection berita={beritaData} />
      <Footer />

      <ScrollToTopButton/>
    </>
  );
}
