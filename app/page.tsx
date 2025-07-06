import Hero from "./components/hero"
import About from "./components/about"
import Service from "./components/service";
import FAQs from "./components/faqs";
import Contact from "./components/contact";
import Rate from "./components/rate"
import Footer from "./components/footer"
import Message from "./components/message"

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <About />
      <Service />
      <Rate/>
      <FAQs />
      <Contact />
      <Message/>
      <Footer/>
    </main>
  );
}