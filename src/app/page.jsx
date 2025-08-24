import NavBar from "@/components/Home/Component inside sections/NavBar";
import AboutUs from "@/components/Home/AboutUs";
import Hero from "@/components/Home/Hero";
import OurPartners from "@/components/Home/OurPartners";
import ContactUS from "@/components/Home/ContactUS";
import Footer from "@/components/Home/Footer";
export default function Home() {


  return (
    <div className="home_page_container" >
      <div className="hero_section_container main_font">
          <NavBar />
          <Hero/>
      </div>

      <AboutUs/>
      <OurPartners/>
      <ContactUS/>
      <Footer/>
    </div>
  );
}
