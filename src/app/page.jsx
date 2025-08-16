import NavBar from "@/components/NavBar";
import AboutUs from "@/components/Home/AboutUs";
import Hero from "@/components/Home/Hero";
import OurPartners from "@/components/Home/OurPartners";
export default function Home() {


  return (
    <div className="home_page_container" >
      <div className="hero_section_container main_font">
          <NavBar />
          <Hero/>
      </div>

      <AboutUs/>
      <OurPartners/>

    </div>
  );
}
