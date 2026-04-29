import { Activity, Clock, MapPinned, Route, Share2, Zap } from "lucide-react";
import AppScreen from "../components/AppScreen";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";
import ShareGallery from "../components/ShareGallery";
import { appScreens, sampleRun, shareAssets } from "../data/site";

export default function PublicRunShare() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-mint/20 bg-mint/10 px-4 py-2 text-sm font-semibold text-mint">
              Shared run
            </p>
            <h1 className="text-5xl font-black leading-tight text-text sm:text-6xl">{sampleRun.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              A public run page gives shared Stryde cards a real destination: distance, pace, streak context, and a clear path back to the app.
            </p>
            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              <RunMetric label="Distance" value={sampleRun.distance} />
              <RunMetric label="Pace" value={sampleRun.pace} />
              <RunMetric label="Duration" value={sampleRun.duration} />
              <RunMetric label="Streak" value={sampleRun.streak} />
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button showIcon to="/support">Open in app</Button>
              <Button showIcon to="/invite/midnight-tempo" variant="secondary">Join next Nexus</Button>
            </div>
          </div>
          <AppScreen alt="Stryde solo run tracking screen" src={appScreens.soloRun} />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Share pages"
            title="Built for discovery, not app duplication"
            description="Public run pages should be lightweight, trustworthy, and optimized for people who receive a shared card."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <FeatureCard
              description="Show the completed effort, key stats, city context, and route preview state."
              icon={Route}
              title="Run summary"
            />
            <FeatureCard
              description="Explain GPS tracking, offline save recovery, and run history without exposing private data."
              icon={Activity}
              title="Tracking trust"
            />
            <FeatureCard
              description="Solo run templates give shared efforts a polished visual before viewers open the app."
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
            eyebrow="Gallery"
            title="Solo share templates"
            description="These templates can be used as public previews for completed solo runs, social cards, and install handoff."
          />
          <ShareGallery items={shareAssets.solo} />
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-background">
              <video
                aria-label="Stryde shared run replay preview"
                autoPlay
                className="mx-auto aspect-[9/16] max-h-[34rem] w-full object-contain"
                controls
                loop
                muted
                playsInline
                preload="metadata"
                src={shareAssets.replay}
              />
            </div>
            <div className="mt-5">
              <MapPinned aria-hidden="true" className="mb-4 h-7 w-7 text-sky" />
              <h2 className="text-2xl font-black text-text">Replay preview</h2>
              <p className="mt-3 leading-7 text-muted">
                Shared run pages can show a lightweight replay preview while keeping detailed controls inside the app.
              </p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <Clock aria-hidden="true" className="mb-4 h-7 w-7 text-mint" />
            <h2 className="text-2xl font-black text-text">Recovery and history context</h2>
            <p className="mt-3 leading-7 text-muted">
              The page can explain that Stryde saves runs locally during network issues and syncs completed efforts back into history.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function RunMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface-secondary/60 p-4">
      <Zap aria-hidden="true" className="mb-3 h-4 w-4 text-mint" />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{label}</p>
      <p className="mt-2 text-xl font-black text-text">{value}</p>
    </div>
  );
}
