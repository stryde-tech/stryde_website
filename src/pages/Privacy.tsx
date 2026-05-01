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

        <article className="glass-card mt-12 rounded-2xl p-6 sm:p-8 lg:p-10">
          <dl className="grid gap-4 border-b border-border pb-8 sm:grid-cols-2">
            {policyMeta.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-text sm:text-base">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 space-y-8">
            <div className="leading-7 text-muted">
              <p>
                Stryde ("we," "our," or "us") respects your privacy. This Privacy Policy explains
                how we collect, use, disclose, and protect your information when you use the Stryde
                mobile app and related services (the "Service").
              </p>
              <p className="mt-4">By using Stryde, you agree to this Privacy Policy.</p>
            </div>

            {sections.map((section) => (
              <section key={section.title} className="border-t border-border pt-8">
                <h2 className="text-2xl font-black leading-tight text-text">{section.title}</h2>
                {section.intro?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-7 text-muted">
                    {paragraph}
                  </p>
                ))}
                {section.groups?.map((group, groupIndex) => (
                  <div key={`${section.title}-${group.heading ?? groupIndex}`} className="mt-5">
                    {group.heading ? (
                      <h3 className="text-base font-bold text-primary">{group.heading}</h3>
                    ) : null}
                    <ul className="mt-3 space-y-2 pl-5 text-muted">
                      {group.items.map((item) => (
                        <li key={item} className="list-disc leading-7">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
