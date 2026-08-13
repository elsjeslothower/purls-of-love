import Nav from "@/components/Nav";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <About />
        <Partners />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
