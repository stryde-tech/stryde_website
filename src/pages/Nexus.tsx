import { Activity, MapPinned, Radio, Share2, Trophy, Users } from "lucide-react";
import AppScreen from "../components/AppScreen";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";
import ShareGallery from "../components/ShareGallery";
import { appScreens, shareAssets } from "../data/site";

const nexusFlow = [
  {
    icon: Users,
    title: "Create the social context",
    description: "A Nexus gives a run a shared space, so runners know what they are joining and who is moving with them.",
  },
  {
    icon: Radio,
    title: "Go live together",
    description: "Friends can run simultaneously, watch relative progress, and stay accountable through live presence.",
  },
  {
    icon: Trophy,
    title: "Carry momentum forward",
    description: "Results, leaderboards, and share cards turn a finished run into motivation for the next one.",
  },
];

const businessProblems = [
  "Runners need trusted discovery, not another empty event listing.",
  "Run clubs and communities need repeat participation, not one-off announcements.",
  "Brands need authentic runner engagement tied to real-world activity.",
  "Participants need proof that the session happened and that people like them showed up.",
];

export default function Nexus() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-sky/20 bg-sky/10 px-4 py-2 text-sm font-semibold text-primary">
              Nexus
            </p>
            <h1 className="text-5xl font-black leading-[1.02] text-text sm:text-6xl lg:text-7xl">
              Live running for people who want to show up together.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Nexus is the core Stryde experience: real-time group running with live presence, shared progress, local competition, and social proof after the run.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button showIcon size="lg" to="/support">Bring Nexus to your community</Button>
              <Button showIcon size="lg" to="/story" variant="secondary">Why we are building this</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <AppScreen alt="Stryde Nexus screen" src={appScreens.nexus} />
            <AppScreen alt="Stryde Orbit upcoming Nexus screen" className="translate-y-10" src={appScreens.orbitHome} />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="User problem"
            title="The hard part is not tracking a run. It is getting people to run together again."
            description="Nexus solves the coordination and motivation gap around social running: discovery before the run, accountability while it is live, and proof after it ends."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {nexusFlow.map((feature) => (
              <FeatureCard
                description={feature.description}
                icon={feature.icon}
                key={feature.title}
                title={feature.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Business problem"
              title="Communities and brands need participation they can trust."
              description="Stryde turns running activity into a credible surface for community-led campaigns, local competition, and measurable engagement."
            />
            <div className="mt-8 grid gap-3">
              {businessProblems.map((item) => (
                <div className="rounded-2xl border border-border bg-surface-secondary/60 p-4 font-semibold text-text" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <AppScreen alt="Stryde leaderboard screen" src={appScreens.leaderboard} />
            <AppScreen alt="Stryde stats screen" className="translate-y-10" src={appScreens.statsOne} />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            align="left"
            eyebrow="Proof loop"
            title="Nexus creates content that travels."
            description="Group cards, moments, routes, rankings, and recaps make participation visible outside the app and help the next run discover its audience."
          />
          <ShareGallery items={shareAssets.nexus} />
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <FeatureCard
            description="Live presence and shared progress make a remote or local run feel active."
            icon={Activity}
            title="Real-time motivation"
          />
          <FeatureCard
            description="Place-based rankings and challenges connect runners to their city and community."
            icon={MapPinned}
            title="Local competition"
          />
          <FeatureCard
            description="Shareable results create an organic loop for discovery, trust, and return participation."
            icon={Share2}
            title="Social by design"
          />
        </div>
      </section>
    </>
  );
}
