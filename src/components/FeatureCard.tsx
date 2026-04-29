import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  kicker?: string;
};

export default function FeatureCard({ icon: Icon, title, description, kicker }: FeatureCardProps) {
  return (
    <motion.article
      className="glass-card group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-mint/40 hover:shadow-[0_26px_90px_rgba(46,111,232,0.22)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/12 text-mint ring-1 ring-mint/20 transition duration-300 group-hover:bg-button-primary group-hover:text-white">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      {kicker ? <p className="mb-2 text-sm font-semibold text-lavender">{kicker}</p> : null}
      <h3 className="text-xl font-bold text-text">{title}</h3>
      <p className="mt-3 leading-7 text-muted">{description}</p>
    </motion.article>
  );
}
