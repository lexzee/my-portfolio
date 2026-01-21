import { ContactSection } from "@/components/contact-section";
import { FeaturedProjects } from "@/components/featured-projetcs";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <ContactSection />
      <Footer />
    </div>
  );
}
