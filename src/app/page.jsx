import NavBar from "@/app/_components/Component inside sections/NavBar";
import AboutUs from "@/app/_components/AboutUs";
import Hero from "@/app/_components/Hero";
import OurPartners from "@/app/_components/OurPartners";
import ContactUS from "@/app/_components/ContactUS";
import Footer from "@/app/_components/Footer";
export default function Home() {


  return (
    <div className="home_page_container" >
      <div className="hero_section_container main_font">
          <NavBar />
          <Hero/>
      </div>

      <AboutUs/>
      <OurPartners/>
      {/* <ContactUS/> */}
      <Footer/>
    </div>
  );
}
