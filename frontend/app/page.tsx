import Image from "next/image";
import Appbar from "./components/Appbar";
import Hero from "./components/Hero";
import CardSection from "./components/CardSection";
export default function Home() {
  return (
    <div>

      <Hero/>
      <CardSection/>
    </div>
  );
}
