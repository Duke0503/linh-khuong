// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

// ─── Services ─────────────────────────────────────────────────────────────────

export interface Service {
  title: string;
  href: string;
  img: string;
  desc: string;
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────

export interface Reason {
  icon: "award" | "shield-check" | "tag" | "package" | "clock";
  title: string;
  desc: string;
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export interface Testimonial {
  name: string;
  role: string;
  review: string;
  stars: number;
}

// ─── Videos ───────────────────────────────────────────────────────────────────

export interface Video {
  id: string;
  title: string;
  thumb: string;
  smallThumb: string;
}

// ─── News ─────────────────────────────────────────────────────────────────────

export interface NewsItem {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  img: string;
}
