import { Database, HeartPulse, Lock, Trash2 } from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";

export default function Privacy() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Privacy"
          title="Privacy policy"
          description="A practical placeholder for Stryde's privacy commitments until final legal copy is approved."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <FeatureCard
            description="Run data can include location, distance, pace, timing, and device-derived activity metadata."
            icon={Database}
            title="Data we handle"
          />
          <FeatureCard
            description="Shared run pages should expose only the information a runner chooses to share publicly."
            icon={Lock}
            title="Public sharing"
          />
          <FeatureCard
            description="Apple Health import and deduping should be transparent, permission-based, and reversible."
            icon={HeartPulse}
            title="Apple Health"
          />
          <FeatureCard
            description="Users should be able to request account and activity deletion through support."
            icon={Trash2}
            title="Data deletion"
          />
        </div>
        <div className="glass-card mt-10 rounded-2xl p-6">
          <h2 className="text-2xl font-black text-text">Data deletion requests</h2>
          <p className="mt-3 leading-7 text-muted">
            Until an automated deletion portal exists, users can request deletion by emailing us at <a href="mailto:hq.stryde@gmail.com" className="text-primary underline">hq.stryde@gmail.com</a>. This page should later be replaced with final legal language and a dedicated request form.
          </p>
        </div>
      </div>
    </section>
  );
}
