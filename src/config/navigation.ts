import type { NavItem } from "@/types/content";

export const mainNavigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/challenges", label: "Challenges" },
  { href: "/programme", label: "Programme" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/faq", label: "FAQ" },
];

export const participationNav: NavItem = {
  href: "/participation",
  label: "Participate",
};

export const footerNavigation: NavItem[] = [...mainNavigation, participationNav];
