import SectionHeading from "../components/SectionHeading";

const policyMeta = [
  { label: "Effective Date", value: "May 1, 2026" },
  { label: "Last Updated", value: "May 1, 2026" },
  { label: "Company/Owner", value: "Ansh Bajaj" },
  { label: "Contact Email", value: "hq.stryde@gmail.com" },
  {
    label: "Address",
    value: "Road No 42, House No. 77, West Punjabi Bagh, New Delhi, Delhi.",
  },
];

type PolicySection = {
  title: string;
  intro?: string[];
  groups?: {
    heading?: string;
    items: string[];
  }[];
};

const sections: PolicySection[] = [
  {
    title: "1. Information We Collect",
    groups: [
      {
        heading: "A. Information You Provide",
        items: [
          "Account details (name, email, phone number)",
          "Profile info (profile photo, city/state/country)",
          "Content you create (run stories, shared cards, uploaded photos, Nexus Moments)",
          "Support messages or feedback you send us",
        ],
      },
      {
        heading: "B. Health, Fitness, and Activity Data",
        items: [
          "Run metrics (distance, pace, time, steps, calories)",
          "GPS/location route data during runs",
          "Related performance/history data",
          "If you connect Apple Health or similar services, we access only the data you explicitly permit.",
        ],
      },
      {
        heading: "C. Device and Technical Data",
        items: [
          "Device type, OS version, app version",
          "Log data, crash diagnostics, performance metrics",
          "Push notification tokens",
        ],
      },
      {
        heading: "D. Social/Session Data",
        items: [
          "Nexus session participation (live runs, invites, lobby events)",
          "Leaderboard and ranking-related activity",
          "Shared content interactions",
        ],
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    intro: ["We use your data to:"],
    groups: [
      {
        items: [
          "Create and manage your account",
          "Track and display your runs and fitness progress",
          "Enable live social runs (Nexus), invites, and leaderboards",
          "Generate replays, share cards, and Moments experiences",
          "Sync app features (including optional calendar integrations)",
          "Send transactional updates (session alerts, security notices)",
          "Improve app stability, safety, and product experience",
          "Detect and prevent abuse, fraud, or unauthorized access",
          "Comply with legal obligations",
        ],
      },
    ],
  },
  {
    title: "3. Location Data",
    intro: [
      "Stryde may request foreground location for active run tracking and background location, if enabled by you, for continuous tracking when the app is minimized or locked.",
      "You can disable location permissions anytime in your device settings. Some tracking features may stop working without location access.",
    ],
  },
  {
    title: "4. Health Platform Integrations",
    intro: [
      "If enabled by you, Stryde may integrate with Apple Health or other APIs.",
      "We only access and process data needed for the features you turn on. We do not use health data for advertising.",
    ],
  },
  {
    title: "5. Sharing of Information",
    intro: ["We may share information:"],
    groups: [
      {
        items: [
          "With service providers that help operate Stryde (hosting, analytics, notifications, infrastructure)",
          "With your consent (e.g., sharing run cards/stories)",
          "With other users as part of social features you use (profile, leaderboard status, live sessions)",
          "If required by law, legal process, or to protect rights/safety",
          "During a merger, acquisition, or asset transfer (with appropriate notice where required)",
          "We do not sell your personal data.",
        ],
      },
    ],
  },
  {
    title: "6. Data Retention",
    intro: [
      "We retain data as long as needed to provide the Service, comply with legal requirements, resolve disputes, and enforce agreements.",
      "You may request deletion of your account and associated personal data, subject to legal exceptions.",
    ],
  },
  {
    title: "7. Your Privacy Choices",
    intro: ["You may:"],
    groups: [
      {
        items: [
          "Access/update profile details in-app",
          "Control permissions (location, notifications, camera, photos, calendar) in device settings",
          "Disconnect optional integrations (e.g., Apple Health)",
          "Request account/data deletion by contacting us at hq.stryde@gmail.com",
        ],
      },
    ],
  },
  {
    title: "8. Security",
    intro: [
      "We use reasonable technical and organizational safeguards to protect your data.",
      "No method of transmission or storage is 100% secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "9. Children's Privacy",
    intro: [
      "Stryde is not directed to children under 13.",
      "We do not knowingly collect personal information from children under that age. If you believe a child has provided personal data, contact us and we will take appropriate action.",
    ],
  },
  {
    title: "10. International Data Transfers",
    intro: [
      "Your information may be processed in countries other than where you live.",
      "Where required, we use appropriate safeguards for cross-border transfers.",
    ],
  },
  {
    title: "11. Third-Party Services",
    intro: [
      "Stryde may include links or integrations with third-party services (e.g., Apple, Google, maps, analytics). Their privacy practices are governed by their own policies.",
    ],
  },
  {
    title: "12. Your Rights (Region-Specific)",
    intro: ["Depending on your location, you may have rights such as:"],
    groups: [
      {
        items: [
          "Access",
          "Correction",
          "Deletion",
          "Data portability",
          "Restriction/objection to processing",
          "Withdrawal of consent",
          "Complaint to a data protection authority",
          "To exercise rights, contact: hq.stryde@gmail.com.",
        ],
      },
    ],
  },
  {
    title: "13. Changes to This Policy",
    intro: [
      "We may update this Privacy Policy from time to time.",
      "If we make material changes, we will provide notice in-app or by other appropriate means. Your continued use of Stryde after updates means you accept the revised policy.",
    ],
  },
  {
    title: "14. Contact Us",
    intro: [
      "If you have questions or requests about privacy, contact the Stryde Privacy Team.",
      "Email: hq.stryde@gmail.com",
      "Address: Road No 42, House No. 77, West Punjabi Bagh, New Delhi, Delhi.",
    ],
  },
];

export default function Privacy() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Privacy"
          title="Privacy policy for Stryde"
          description="This Privacy Policy explains how Stryde collects, uses, discloses, and protects information when you use the Stryde mobile app and related services."
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
