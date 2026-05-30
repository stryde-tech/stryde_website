import { Users, Sparkles, Trophy, HeartPulse, Handshake } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import Button from "../components/Button";

export default function Brands() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-surface-secondary/40">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 inline-flex rounded-full border border-mint/20 bg-mint/10 px-4 py-2 text-sm font-semibold text-mint">
            For Brands & Partners
          </p>
          <h1 className="text-5xl font-black leading-[1.02] text-text sm:text-6xl lg:text-7xl">
            Engage Runners Where It Matters
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted sm:text-xl">
            Stryde connects your brand to real runners, real communities, and real-world activity—live and measurable. Go beyond impressions and become part of the movement.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
            <Button showIcon size="lg" to="mailto:hq.stryde@gmail.com">Partner with Stryde</Button>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Stryde for Brands?"
            title="Reach, Activate, and Measure Real Runners"
            description="Stryde is built for authentic engagement and measurable impact."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={Users}
              title="Authentic Engagement"
              description="Reach runners in the moment—during live group runs, challenges, and events."
              kicker="Be part of the action"
            />
            <FeatureCard
              icon={Sparkles}
              title="Community-Led Campaigns"
              description="Empower clubs and leaders to activate their audience with branded challenges and rewards."
              kicker="Grow with communities"
            />
            <FeatureCard
              icon={Trophy}
              title="Real-World Participation"
              description="Stryde is built around actual activity, not just digital impressions. See who shows up and who shares."
              kicker="Move beyond ads"
            />
            <FeatureCard
              icon={HeartPulse}
              title="Measurable Impact"
              description="Track participation, engagement, and ROI with transparent, actionable data."
              kicker="See real results"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl glass-card rounded-2xl p-8 text-center">
          <Handshake className="mx-auto mb-4 h-10 w-10 text-mint" />
          <h2 className="text-2xl font-black text-text mb-2">Ready to partner?</h2>
          <p className="text-lg text-muted mb-6">Let’s create something great for runners and your brand. Reach out to start a campaign or partnership.</p>
          <Button showIcon size="lg" to="mailto:hq.stryde@gmail.com">Contact Stryde</Button>
        </div>
      </section>
    </>
  );
}
