import NavBar from "@/components/NavBar";
import AboutUs from "@/components/Home/AboutUs";
import Hero from "@/components/Home/Hero";
export default function Home() {


  return (
    <div className="home_page_container" >
      <div className="hero_section_container">
          <NavBar />
          <Hero/>
      </div>

      <AboutUs/>

    </div>
  );
}
