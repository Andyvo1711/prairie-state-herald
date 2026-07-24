import type { CategorySlug } from "@/types/article";

export interface Category {
  slug: CategorySlug;
  name: string;
  /** Short blurb used in the footer and category headers */
  tagline: string;
  /** Tailwind utility classes used for the category's accent badge */
  badgeClass: string;
}

/**
 * Order here is intentional and drives the homepage section order and nav.
 * Each section gets a distinct hue drawn from the Illinois palette
 * (lakefront navy, historic terracotta, modern platinum) plus two
 * complementary accents for scannability across five sections.
 */
export const CATEGORIES: Category[] = [
  {
    slug: "education",
    name: "Education",
    tagline:
      "The University of Chicago, Northwestern, and the schools shaping Illinois's next generation.",
    badgeClass: "bg-[#1b3550]/10 text-[#1b3550]",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline:
      "Northwestern Medicine, Rush, and the systems keeping Illinois well.",
    badgeClass: "bg-[#a2492c]/10 text-[#a2492c]",
  },
  {
    slug: "business-leaders",
    name: "Business Leaders",
    tagline:
      "The entrepreneurs and executives driving Illinois forward, from the Loop to Naperville.",
    badgeClass: "bg-[#6b7280]/15 text-[#3f454c]",
  },
  {
    slug: "finance-economy",
    name: "Finance & Economy",
    tagline:
      "CME Group, the trading floor, and the economic pulse of Chicago and the Midwest.",
    badgeClass: "bg-[#2f6b6b]/10 text-[#1f4a4a]",
  },
  {
    slug: "beauty-wellness",
    name: "Beauty & Wellness",
    tagline:
      "Spas, self-care, and the wellness rituals trending from the Gold Coast to Oak Park.",
    badgeClass: "bg-rose-500/10 text-rose-700",
  },
];

export function getCategoryName(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}

export function getCategoryBadgeClass(slug: string): string {
  return (
    CATEGORIES.find((c) => c.slug === slug)?.badgeClass ??
    "bg-slate-500/10 text-slate-700"
  );
}
