import { CalendarClock, MapPin, Radio, Smartphone, Users } from "lucide-react";
import AppScreen from "../components/AppScreen";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";
import { appScreens } from "../data/site";

export default function NexusInvite() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-sky/20 bg-sky/10 px-4 py-2 text-sm font-semibold text-primary">
              Nexus invite
            </p>
            <h1 className="text-5xl font-black leading-tight text-text sm:text-6xl">
              You were invited to a live group run.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Open this Nexus in Stryde to join the lobby, run during the scheduled window, and see everyone move on the same live board.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button showIcon size="lg" to="/support">Get the app</Button>
              <Button showIcon size="lg" to="/nexus/midnight-tempo" variant="secondary">
                Preview summary
              </Button>
            </div>
          </div>
          <AppScreen alt="Stryde Nexus screen" src={appScreens.nexus} />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How invites work"
            title="Desktop explains. Mobile runs."
            description="Invite links should build confidence on the web, then route runners into the app for the actual live run experience."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <FeatureCard
              description="See the run window, distance, location context, and who has joined before opening the app."
              icon={CalendarClock}
              title="Event details"
            />
            <FeatureCard
              description="Join the waiting room, check invite status, and get ready before the run opens."
              icon={Users}
              title="Lobby flow"
            />
            <FeatureCard
              description="Live run tracking, moments, rankings, and progress stay inside the mobile app."
              icon={Radio}
              title="Live tracking"
            />
            <FeatureCard
              description="Desktop visitors get a clear app handoff instead of a dead invite link."
              icon={Smartphone}
              title="App routing"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-surface-secondary/60 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-lavender">
                <MapPin aria-hidden="true" className="h-4 w-4" />
                Midnight Tempo - Global
              </p>
              <h2 className="mt-2 text-2xl font-black text-text">5K window opens Friday at 21:00</h2>
            </div>
            <Button showIcon to="/support">Notify me</Button>
          </div>
        </div>
      </section>
    </>
  );
}
