export type NavItem = {
  href: string;
  label: string;
};

export type Pillar = {
  index: string;
  title: string;
  description: string;
};

export type Highlight = {
  title: string;
  description: string;
};

export type Challenge = {
  id: string;
  title: string;
  statusLabel: string;
  summary: string;
};

export type ScheduleItem = {
  id: string;
  time: string | null;
  title: string;
  description: string;
};

export type SponsorSlot = {
  id: string;
  label: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type SocialLink = {
  label: string;
  href: string;
};
