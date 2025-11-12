import Image from "next/image";
import Appbar from "./components/Appbar";
import Hero from "./components/Hero";
import CardSection from "./components/CardSection";
import { TimelineDemo } from "./components/Timelinedemo";
import {DraggableCardDemo} from "./components/DraggableCard";
export default function Home() {
  return (
    <div>
      <Hero/>
      <DraggableCardDemo/>
      <TimelineDemo/>
      <CardSection/>
    </div>
  );
}
