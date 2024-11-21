import Hero from "@/components/hero";
import Contact from "./contact/page";
import About from "./about/page";
import Product from "./products/page";



export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Product/>
      <Contact/>
    </div>
  );
}
