import type {
  Challenge,
  FaqItem,
  Highlight,
  Pillar,
  ScheduleItem,
  SponsorSlot,
} from "@/types/content";

/**
 * Venue capacity is shared by participants, volunteers and ADSC members.
 * Never publish `venueLimitIncludingStaff` as the number of participant places.
 * Set the public registration cap only after those groups are counted.
 */
export const capacityPolicy = {
  venueLimitIncludingStaff: 199,
  participantTargetMin: 150,
  participantTargetPreferred: "160–170",
  publicStatement:
    "The hackathon is planned at a large scale. The number of participant places will be published with registration. Venue capacity is shared with volunteers and ADSC members, so participant places will be lower than the room limit.",
};

export const pillars: Pillar[] = [
  {
    index: "01",
    title: "Sustainability",
    description:
      "Environmental responsibility is part of the work. Teams are asked to treat resource use, climate impact and longer-term consequences as constraints, not as a slogan added at the end.",
  },
  {
    index: "02",
    title: "Emerging technologies",
    description:
      "Data science, artificial intelligence and neighbouring methods are tools for the challenges. The point is to use them with care, on problems where they can change an outcome.",
  },
  {
    index: "03",
    title: "Real-world impact",
    description:
      "Challenges should point at something tangible: a decision, a process, a place or a community that can use the result. Demos without a path to use are not the aim.",
  },
  {
    index: "04",
    title: "Interdisciplinary collaboration",
    description:
      "Teams are expected to mix disciplines. Technical experience and subject knowledge both belong, including from people who have not joined a hackathon before.",
  },
];

export const highlights: Highlight[] = [
  {
    title: "About 24 hours",
    description:
      "Approximately 24 hours of active hacking. Arrival, presentations and the published timetable will be added only after they are confirmed.",
  },
  {
    title: "Team challenges",
    description:
      "Participants work in teams on practical briefs. Interdisciplinary teams are encouraged.",
  },
  {
    title: "Every experience level",
    description:
      "Different levels of technical experience are welcome. Specialist knowledge is useful, and it is not an entry requirement.",
  },
  {
    title: "Impact-driven projects",
    description:
      "The work should aim at a result someone outside the team can recognise: a partner, a community or a research question.",
  },
];

export const challenges: Challenge[] = [
  {
    id: "placeholder-01",
    title: "Challenge to be announced",
    statusLabel: "Placeholder 01",
    summary:
      "Reserved for a confirmed brief. This entry is not a real task and will be replaced when a challenge owner publishes one.",
  },
  {
    id: "placeholder-02",
    title: "Challenge to be announced",
    statusLabel: "Placeholder 02",
    summary:
      "Reserved for a confirmed brief. Add the title, the problem and who it is for in this list when they are known.",
  },
  {
    id: "placeholder-03",
    title: "Challenge to be announced",
    statusLabel: "Placeholder 03",
    summary:
      "Reserved for a confirmed brief. Leave the placeholder label in place until the description is final.",
  },
];

/**
 * Add a session only with a confirmed title. Use `time: null` when the slot
 * is known but the clock time is not. An empty list renders the coming-soon state.
 */
export const schedule: ScheduleItem[] = [];

export const scheduleNote =
  "The programme has not been published. No session times are shown until the organising team confirms them.";

export const sponsorSlots: SponsorSlot[] = [
  { id: "placement-01", label: "Partner placement" },
  { id: "placement-02", label: "Partner placement" },
  { id: "placement-03", label: "Partner placement" },
  { id: "placement-04", label: "Partner placement" },
];

export const unconfirmedDetails = [
  "Official event name",
  "Date",
  "Venue",
  "Detailed schedule",
  "Challenge briefs",
  "Speakers and mentors",
  "Confirmed sponsors",
  "Registration price",
  "Registration link",
] as const;

export const faqs: FaqItem[] = [
  {
    id: "what",
    question: "What is the ADSC Hackathon?",
    answer:
      "It is a large-scale interdisciplinary hackathon organised by the Aachen Data Science Club at RWTH Aachen University. Teams work on practical challenges that sit between sustainability, technology and real-world impact. The official event name has not been finalised. Until it is, this website uses ADSC Hackathon.",
  },
  {
    id: "motto",
    question: "What does “Innovate. Sustain. Inspire.” mean for the event?",
    answer:
      "It is the core motto. Innovate asks for new approaches to concrete problems. Sustain asks for environmental responsibility in the work itself. Inspire asks the results to matter to people beyond the team, including academia, industry and society.",
  },
  {
    id: "theme",
    question: "What is sustAInIT?",
    answer:
      "sustAInIT is a working theme. It may remain a theme or a motto rather than become the official name. It is not presented here as the confirmed title of the event.",
  },
  {
    id: "duration",
    question: "How long is the hacking?",
    answer:
      "Approximately 24 hours of active hacking. A full schedule, including how the day opens and how work is presented, has not been published.",
  },
  {
    id: "who",
    question: "Who can take part?",
    answer:
      "Different technical experience levels are welcome, and interdisciplinary teams are encouraged. Eligibility, team size and any prerequisites will be confirmed when registration opens.",
  },
  {
    id: "teams",
    question: "Do I need a team before I arrive?",
    answer:
      "The format is team-based. How teams are formed, and whether you must arrive with one, has not been published yet.",
  },
  {
    id: "when-where",
    question: "When and where does it take place?",
    answer:
      "The date and the venue have not been announced. Both will be published on this website when they are confirmed.",
  },
  {
    id: "register",
    question: "How do I register?",
    answer:
      "Registration is not open. Ticketing and payment will be handled by an external platform, so this website will not collect payment details. The registration link will appear here once it exists.",
  },
  {
    id: "fee",
    question: "Is there a participation fee?",
    answer: "Registration prices have not been announced.",
  },
  {
    id: "challenges",
    question: "What will the challenges be?",
    answer:
      "Teams will work on real-world, impact-driven challenges. Individual briefs have not been published. Entries marked as placeholders are not real tasks.",
  },
  {
    id: "places",
    question: "How many people can attend?",
    answer: capacityPolicy.publicStatement,
  },
];
