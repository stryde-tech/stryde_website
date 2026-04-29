import { LifeBuoy, Mail, MessageCircle, ShieldQuestion } from "lucide-react";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";

export default function Support() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Support"
          title="Support and contact"
          description="A lightweight support page for launch questions, privacy requests, GPS issues, Nexus rules, and app access."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard
            description="Ask about app access, launch timing, invite links, and download availability."
            icon={Mail}
            title="Contact"
          />
          <FeatureCard
            description="Report GPS accuracy, offline save recovery, Apple Health sync, or run history issues."
            icon={LifeBuoy}
            title="Product help"
          />
          <FeatureCard
            description="Request data deletion or ask how public run and Nexus pages handle privacy."
            icon={ShieldQuestion}
            title="Privacy requests"
          />
          <FeatureCard
            description="Ask about Nexus invite links, lobbies, live windows, rankings, and summaries."
            icon={MessageCircle}
            title="Nexus support"
          />
        </div>
        <div className="glass-card mt-10 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-black text-text">Get in touch</h2>
          <p className="mt-3 max-w-3xl leading-7 text-muted">
            Email Stryde at hq.stryde@gmail.com for app access, support, privacy requests, Nexus questions, and launch updates.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button showIcon to="mailto:hq.stryde@gmail.com">Email Stryde</Button>
            <Button showIcon to="/privacy" variant="secondary">Privacy requests</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
