import { Activity, Apple, HeartPulse, History, Map, Radio, ShieldCheck, Share2, Trophy } from "lucide-react";
import AppScreen from "../components/AppScreen";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";
import ShareGallery from "../components/ShareGallery";
import { appScreens, shareAssets } from "../data/site";

const productFeatures = [
  {
    icon: Activity,
    title: "Solo Runs",
    description: "Track GPS runs, keep reliable history, recover offline saves, and turn every effort into visible progress.",
  },
  {
    icon: Radio,
    title: "Nexus",
    description: "Live group runs with invites, lobbies, scheduled windows, live tracking, moments, and post-run summaries.",
  },
  {
    icon: HeartPulse,
    title: "Stats",
    description: "Understand streaks, distance, pace, progress patterns, heatmaps, and rankings across your running life.",
  },
  {
    icon: Share2,
    title: "Sharing",
    description: "Public run and Nexus recap pages make shared cards useful when they land outside the app.",
  },
  {
    icon: Apple,
    title: "Apple Health",
    description: "Import runs, dedupe activity, sync carefully, and keep privacy expectations clear before launch.",
  },
];

export default function Home() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-sky/20 bg-sky/10 px-4 py-2 text-sm font-semibold text-primary">
              Stryde website first build
            </p>
            <h1 className="text-5xl font-black leading-[1.02] text-text sm:text-6xl lg:text-7xl">
              A web layer for running discovery, trust, and sharing.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Stryde is a social running app for solo runs, live Nexus sessions, stats, share pages, and health-aware run history.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button showIcon size="lg" to="/invite/midnight-tempo">Preview Nexus invite</Button>
              <Button showIcon size="lg" to="/run/evening-solo" variant="secondary">View shared run</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 items-center gap-4">
            <AppScreen alt="Stryde home screen" className="translate-y-8" src={appScreens.orbitHome} />
            <AppScreen alt="Stryde stats screen" src={appScreens.statsOne} />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Product"
            title="Explain the app without rebuilding the app"
            description="The website should help people understand Stryde, open shared content, and trust how run data works."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {productFeatures.map((feature) => (
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
              eyebrow="Nexus"
              title="Live group runs need a web handoff"
              description="When someone opens a Nexus invite on desktop, the site explains the run, builds confidence, and routes them into the mobile app."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Invite link", "Lobby preview", "Live tracking in app", "Post-run summary"].map((item) => (
                <div className="rounded-2xl border border-border bg-surface-secondary/60 p-4 font-semibold text-text" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <AppScreen alt="Stryde Nexus screen" src={appScreens.nexus} />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Public pages"
            title="Share pages become useful destinations"
            description="Runs and Nexus summaries can be opened by anyone, previewed safely, and used to invite the next runner."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <FeatureCard
              description="A public page for completed solo or Nexus runs with privacy-safe stats and app handoff."
              icon={Map}
              title="Public run share"
            />
            <FeatureCard
              description="A public recap for completed Nexus sessions with rankings, moments, and next-run conversion."
              icon={Trophy}
              title="Public Nexus summary"
            />
            <FeatureCard
              description="Solo and Nexus templates turn completed efforts into polished public previews."
              icon={Share2}
              title="Share card gallery"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            align="left"
            eyebrow="Share gallery"
            title="Templates for runs, groups, and moments"
            description="The website now includes the share-card assets so visitors can see what Stryde content looks like when it leaves the app."
          />
          <ShareGallery items={[shareAssets.solo[0], shareAssets.nexus[0]]} />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="glass-card rounded-2xl p-6">
            <History aria-hidden="true" className="mb-5 h-7 w-7 text-mint" />
            <h2 className="text-2xl font-black text-text">Run tracking trust</h2>
            <p className="mt-3 leading-7 text-muted">
              Explain GPS tracking, offline save recovery, run history, stats, and streak logic before users install.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <Apple aria-hidden="true" className="mb-5 h-7 w-7 text-lavender" />
            <h2 className="text-2xl font-black text-text">Apple Health clarity</h2>
            <p className="mt-3 leading-7 text-muted">
              Set expectations around imports, deduping, sync behavior, and data privacy from the website.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <ShieldCheck aria-hidden="true" className="mb-5 h-7 w-7 text-sky" />
            <h2 className="text-2xl font-black text-text">Safety and support</h2>
            <p className="mt-3 leading-7 text-muted">
              Privacy, terms, and support pages make the product feel credible before deeper web account features exist.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl border border-mint/20 bg-[linear-gradient(135deg,rgba(116,217,198,0.16),rgba(46,111,232,0.16),rgba(13,16,20,0.94))] p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-mint">Coming next</p>
              <h2 className="mt-3 text-3xl font-black text-text">App Store and Play Store CTAs will go here.</h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted">
                Until the app links are ready, the website can route visitors to invite previews, share pages, and support.
              </p>
            </div>
            <Button showIcon size="lg" to="/support">Contact Stryde</Button>
          </div>
        </div>
      </section>
    </>
  );
}
