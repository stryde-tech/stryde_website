import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import logo from "../assets/stryde_logo.png";

const APP_STORE_URL = "https://apps.apple.com/in/app/stryde/id6759480506";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=today.stryde.app";

export default function Invite() {
  const [params] = useSearchParams();
  const code = params.get("code") ?? "";
  const [showFallback, setShowFallback] = useState(false);

  const deepLink = useMemo(
    () => `stryde://invite?code=${encodeURIComponent(code)}`,
    [code],
  );

  useEffect(() => {
    // Try to open the app immediately.
    window.location.href = deepLink;

    // If the app isn't installed, the redirect silently fails and we stay
    // on this page — reveal the store links after a short delay.
    const timer = window.setTimeout(() => setShowFallback(true), 1500);
    return () => window.clearTimeout(timer);
  }, [deepLink]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-primary">
      <div className="page-glow" />
      <div className="noise-layer" />

      <main className="relative mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 text-center">
        <img alt="Stryde" className="mb-8 h-16 w-16 rounded-2xl" src={logo} />

        <h1 className="text-2xl font-semibold tracking-tight">
          Opening Stryde…
        </h1>
        <p className="mt-3 text-muted">
          You&apos;ve been invited to join a run on Stryde.
        </p>

        {showFallback && (
          <div className="mt-10 w-full">
            <a
              className="block w-full rounded-xl bg-button-primary px-6 py-3 font-medium text-white transition hover:opacity-90"
              href={deepLink}
            >
              Open in the Stryde app
            </a>

            <p className="mt-8 text-sm text-muted">
              Don&apos;t have the app yet?
            </p>
            <div className="mt-3 flex flex-col gap-3">
              <a
                className="rounded-xl border border-border px-6 py-3 text-sm font-medium text-primary transition hover:border-sky"
                href={APP_STORE_URL}
              >
                Download on the App Store
              </a>
              <a
                className="rounded-xl border border-border px-6 py-3 text-sm font-medium text-primary transition hover:border-sky"
                href={PLAY_STORE_URL}
              >
                Get it on Google Play
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
