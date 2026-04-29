import { Medal, Radio, Share2, Trophy, Users } from "lucide-react";
import AppScreen from "../components/AppScreen";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";
import ShareGallery from "../components/ShareGallery";
import { appScreens, sampleNexusSummary, shareAssets } from "../data/site";

export default function PublicNexusSummary() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-lavender/20 bg-lavender/10 px-4 py-2 text-sm font-semibold text-lavender">
              Nexus summary
            </p>
            <h1 className="text-5xl font-black leading-tight text-text sm:text-6xl">
              {sampleNexusSummary.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Public Nexus summaries give completed live group runs a shareable home with results, moments, and a path to the next event.
            </p>
            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              <SummaryMetric label="Runners" value={sampleNexusSummary.runners} />
              <SummaryMetric label="Distance" value={sampleNexusSummary.distance} />
              <SummaryMetric label="Winner" value={sampleNexusSummary.winner} />
              <SummaryMetric label="Top pace" value={sampleNexusSummary.topPace} />
            </div>
          </div>
          <AppScreen alt="Stryde Nexus challenge screen" src={appScreens.nexus} />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="After the run"
            title="A shareable recap for every live group run"
            description="Summaries turn finished Nexus sessions into proof, discovery, and conversion without exposing the live app experience."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <FeatureCard
              description="Show podium results, rank movement, completion counts, and the fastest verified efforts."
              icon={Trophy}
              title="Rankings"
            />
            <FeatureCard
              description="Capture run moments, milestones, and community highlights that make the Nexus feel alive."
              icon={Radio}
              title="Moments"
            />
            <FeatureCard
              description="Let runners share the completed event and route viewers into the next invite."
              icon={Share2}
              title="Share loop"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            align="left"
            eyebrow="Gallery"
            title="Nexus share templates"
            description="Completed Nexus sessions can produce group cards and moment cards that make results easy to share outside the app."
          />
          <ShareGallery items={shareAssets.nexus} />
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-surface-secondary/60 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-lavender">{sampleNexusSummary.window}</p>
              <h2 className="mt-2 text-2xl font-black text-text">Join the next Nexus window</h2>
            </div>
            <Button showIcon to="/invite/midnight-tempo">Open invite</Button>
          </div>
        </div>
      </section>
    </>
  );
}

function SummaryMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface-secondary/60 p-4">
      <Medal aria-hidden="true" className="mb-3 h-4 w-4 text-lavender" />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{label}</p>
      <p className="mt-2 text-xl font-black text-text">{value}</p>
    </div>
  );
}
