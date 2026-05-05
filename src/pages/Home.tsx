import { Activity, HeartPulse, Map, Radio, Route, Share2, Sparkles, Trophy, Users } from "lucide-react";
import AppScreen from "../components/AppScreen";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";
import ShareGallery from "../components/ShareGallery";
import { appScreens, shareAssets } from "../data/site";

const movementSignals = [
  {
    icon: Users,
    title: "Run clubs are exploding",
    description: "Running is no longer a solo utility habit. People are joining communities, events, and local groups for accountability and identity.",
  },
  {
    icon: Trophy,
    title: "Events drive motivation",
    description: "Races, challenges, and community goals give runners a reason to show up, compare progress, and keep training.",
  },
  {
    icon: Share2,
    title: "Fitness is social proof",
    description: "Routes, recaps, cards, and rankings help effort travel beyond the app and bring the next runner in.",
  },
];

const platformPillars = [
  {
    icon: Radio,
    title: "Nexus",
    description: "Run simultaneously with friends across cities, follow live pace and distance, and stay motivated through presence.",
    kicker: "Real-time together",
  },
  {
    icon: Activity,
    title: "Pulse",
    description: "Local leaderboards and activity context make running feel grounded in places, routes, and communities.",
    kicker: "Local competition",
  },
  {
    icon: Sparkles,
    title: "Quest",
    description: "Short-term goals add variety, structure, and friendly competition to everyday runs.",
    kicker: "Structured challenges",
  },
  {
    icon: Share2,
    title: "Share",
    description: "Run cards, Nexus recaps, and public pages turn participation into proof people can open anywhere.",
    kicker: "Social by design",
  },
];

const userValue = [
  "Find live runs, local challenges, and people nearby before you lace up.",
  "Know who is joining, what is happening, and how everyone is moving together.",
  "Share your run after it ends and invite more friends into the next one.",
  "Stay consistent with streaks, stats, leaderboards, and simple goals.",
];

export default function Home() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-sky/20 bg-sky/10 px-4 py-2 text-sm font-semibold text-primary">
              Stryde: Run together, anywhere
            </p>
            <h1 className="text-5xl font-black leading-[1.02] text-text sm:text-6xl lg:text-7xl">
              Running is better with friends.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Stryde lets you run live with friends—no matter where they are. Start a group run, see everyone’s progress in real time, and stay motivated together.
              <br /></p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button showIcon size="lg" to="https://apps.apple.com/in/app/stryde/id6759480506" variant="primary">Try Stryde on iOS</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 items-center gap-4">
            <AppScreen alt="Stryde Nexus screen" className="translate-y-8" src={appScreens.nexus} />
            <AppScreen alt="Stryde login screen" src={appScreens.login} />
          </div>
        </div>
      </section>

      <section id="usps" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Stryde?"
            title="Everything you want from a running app—finally social."
            description="Stryde is built for people who want to run together, stay motivated, and have fun. No more running alone or just logging miles."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={Radio}
              title="Run live with friends"
              description="Start a group run and see everyone’s progress in real time."
            />
            <FeatureCard
              icon={Trophy}
              title="Compete locally"
              description="Climb leaderboards and join challenges in your city or club."
            />
            <FeatureCard
              icon={Sparkles}
              title="Stay motivated"
              description="Friendly challenges and rewards keep you coming back."
            />
            <FeatureCard
              icon={Users}
              title="Accountability made easy"
              description="See your friends show up and help each other stay consistent."
            />
          </div>
        </div>
      </section>

      <section id="nexus" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="How it works"
              title="Run live, stay connected, have fun."
              description="Stryde makes it simple: create or join a group run, start together, see everyone’s progress, and compete or just enjoy the movement."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface-secondary/60 p-4 font-semibold text-text">Create or join a group run</div>
              <div className="rounded-2xl border border-border bg-surface-secondary/60 p-4 font-semibold text-text">Run live with friends</div>
              <div className="rounded-2xl border border-border bg-surface-secondary/60 p-4 font-semibold text-text">See everyone’s progress</div>
              <div className="rounded-2xl border border-border bg-surface-secondary/60 p-4 font-semibold text-text">Compete or just have fun</div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <AppScreen alt="Stryde Nexus creation screen" src={appScreens.nexus} />
            <AppScreen alt="Stryde Orbit upcoming Nexus screen" className="translate-y-10" src={appScreens.orbitHome} />
          </div>
        </div>
      </section>

      <section id="trust" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="At a glance"
            title="Everything runners need before, during, and after a run."
            description="Stryde helps people find runs, join with confidence, stay connected while they move, and share the moments that bring friends back next time."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {platformPillars.map((feature) => (
              <FeatureCard
                description={feature.description}
                icon={feature.icon}
                key={feature.title}
                kicker={feature.kicker}
                title={feature.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="sharing" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            align="left"
            eyebrow="Shareability"
            title="Every run can become the reason someone else joins."
            description="Public run pages, Nexus summaries, and share cards make every invite easy to open, understand, and pass along."
          />
          <ShareGallery items={[shareAssets.nexus[1], shareAssets.solo[0]]} />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid grid-cols-2 items-center gap-4">
            <AppScreen alt="Stryde stats screen" src={appScreens.statsOne} />
            <AppScreen alt="Stryde leaderboard screen" className="translate-y-10" src={appScreens.leaderboard} />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Accountability"
              title="Real-time motivation becomes long-term consistency."
              description="Stryde keeps the energy going after each run with streaks, pace trends, heatmaps, local rankings, and challenges worth coming back to."
            />
            <div className="mt-8 grid gap-3">
              {userValue.map((item) => (
                <div className="rounded-2xl border border-border bg-surface-secondary/60 p-4 font-semibold text-text" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="glass-card rounded-2xl p-6">
            <Route aria-hidden="true" className="mb-5 h-7 w-7 text-mint" />
            <h2 className="text-2xl font-black text-text">Discovery before the run</h2>
            <p className="mt-3 leading-7 text-muted">
              Invites and public previews show runners what is happening, who is joining, and why it is worth showing up.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <HeartPulse aria-hidden="true" className="mb-5 h-7 w-7 text-lavender" />
            <h2 className="text-2xl font-black text-text">Trust while it is live</h2>
            <p className="mt-3 leading-7 text-muted">
              Live progress, pace, and presence make every Nexus feel active, real, and easy to follow.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <Map aria-hidden="true" className="mb-5 h-7 w-7 text-sky" />
            <h2 className="text-2xl font-black text-text">Sharing after it ends</h2>
            <p className="mt-3 leading-7 text-muted">
              Run cards, maps, rankings, and summaries help runners celebrate the effort and invite the next group.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl border border-mint/20 bg-[linear-gradient(135deg,rgba(116,217,198,0.16),rgba(46,111,232,0.16),rgba(13,16,20,0.94))] p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-mint">Take a stryde in the right direction</p>
              <h2 className="mt-3 text-3xl font-black text-text">Bring your running community together.</h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted">
                Stryde helps runners find live communities, join runs with confidence, and share the moments that keep everyone moving.
              </p>
            </div>
            <Button showIcon size="lg" to="mailto:hq.stryde@gmail.com">Contact Stryde</Button>
          </div>
        </div>
      </section>
    </>
  );
}
