import { Loader } from "../components/Loader";
import { SmoothScroll } from "../components/SmoothScroll";
import { Hero } from "../components/sections/Hero";
import { Manifesto } from "../components/sections/Manifesto";
import { Capabilities } from "../components/sections/Capabilities";
import { Method } from "../components/sections/Method";
import { ForWho } from "../components/sections/ForWho";
import { Principles } from "../components/sections/Principles";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Loader />
      <main className="relative w-full overflow-hidden">
        <Hero />
        <Manifesto />
        <Capabilities />
        <Method />
        <ForWho />
        <Principles />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
