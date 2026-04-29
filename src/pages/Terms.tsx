import { BadgeCheck, FileText, Radio, Scale } from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";

export default function Terms() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Terms"
          title="Terms of service"
          description="A concise placeholder for product rules, acceptable use, Nexus participation, and shared content expectations."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <FeatureCard
            description="Stryde is a fitness and social running product. Users are responsible for running safely and following local rules."
            icon={Scale}
            title="Use of Stryde"
          />
          <FeatureCard
            description="Nexus rules should define scheduled windows, leaderboard eligibility, verification, and fair use."
            icon={Radio}
            title="Nexus rules"
          />
          <FeatureCard
            description="Public run and Nexus pages may be shareable when a user or event chooses to publish them."
            icon={FileText}
            title="Shared content"
          />
          <FeatureCard
            description="Final terms should be reviewed before public launch, payments, or Stryde+ subscriptions."
            icon={BadgeCheck}
            title="Launch readiness"
          />
        </div>
      </div>
    </section>
  );
}
