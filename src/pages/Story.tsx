import { ExternalLink, Mail, Sparkles, Target, Users } from "lucide-react";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";

const team = [
  {
    name: "Ansh Bajaj",
    role: "Product and community",
    description: "Building the runner experience around Nexus, social accountability, and community-led growth.",
  },
  {
    name: "Garv Chandalia",
    role: "Engineering and web",
    description: "Building the web layer for discovery, trust, sharing, and product credibility around Stryde.",
  },
  {
    name: "Aryan Dogra",
    role: "Product and operations",
    description: "Helping shape the running network, launch motion, and real-world participation strategy.",
  },
];

export default function Story() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 inline-flex rounded-full border border-mint/20 bg-mint/10 px-4 py-2 text-sm font-semibold text-mint">
            Story / Team
          </p>
          <h1 className="text-5xl font-black leading-[1.02] text-text sm:text-6xl lg:text-7xl">
            We are building Stryde because running is becoming a social network in motion.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            Run clubs, races, challenges, and local communities are growing fast. Stryde exists to make participation easier to discover, easier to trust, and easier to share.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we believe"
            title="The future of fitness is participation, not passive tracking."
            description="People do not only want a map after the workout. They want accountability before they start, presence while they run, and proof they can share after it ends."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <FeatureCard
              description="Nexus makes running with others possible across places, schedules, and levels."
              icon={Users}
              title="Run together, anywhere"
            />
            <FeatureCard
              description="Quests, goals, and leaderboards add purpose beyond one session."
              icon={Target}
              title="Consistency needs structure"
            />
            <FeatureCard
              description="Shareable moments make running visible and bring more people into the movement."
              icon={Sparkles}
              title="Social proof matters"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Team"
            title="A small team focused on the live running layer."
            description="We are shaping Stryde around the user and business problem: how runners, communities, and brands create trusted participation around real activity."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {team.map((member) => (
              <article className="glass-card rounded-2xl p-6" key={member.name}>
                <h2 className="text-2xl font-black text-text">{member.name}</h2>
                <p className="mt-2 font-semibold text-mint">{member.role}</p>
                <p className="mt-4 leading-7 text-muted">{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-surface-secondary/60 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lavender">Get involved</p>
              <h2 className="mt-2 text-2xl font-black text-text">Building a run community, event, or brand activation?</h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted">
                We would love to talk about how Stryde can make participation discoverable, trusted, and shareable.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button showIcon to="mailto:hq.stryde@gmail.com"><Mail aria-hidden="true" className="h-4 w-4" />Email</Button>
              <Button showIcon to="https://linkedin.com/company/strydetoday" variant="secondary"><ExternalLink aria-hidden="true" className="h-4 w-4" />LinkedIn</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
