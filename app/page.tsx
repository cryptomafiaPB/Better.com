import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Testimonial />
      <Services />
      <hr className="border-t border-slate-200 my-0 pb-lg"></hr>
    </div>
  );
}
