export type NavLink = { label: string; href: string };
export type Category = { id: string; title: string; text: string };
export type Step = {
  id: string;
  title: string;
  text: string;
  shape: "square" | "orange" | "sun";
};
export type Stat = { value: string; label: string };
export type FooterColumn = { title: string; links: NavLink[] };

export const navLinks: NavLink[] = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#contact" },
  { label: "Community", href: "#people" },
  { label: "How it works", href: "#how-it-works" },
];

export const socialProof = {
  learners: "24,000+",
  courses: "120+",
  averageRating: "4.9",
};

export const categories: Category[] = [
  {
    id: "01",
    title: "Product Design",
    text: "Learn to shape digital products that feel clear, useful and easy to use.",
  },
  {
    id: "02",
    title: "Technology",
    text: "Get comfortable with the tools and ideas shaping the digital world.",
  },
  {
    id: "03",
    title: "Business",
    text: "Make better decisions, collaborate with confidence and turn ideas into action.",
  },
  {
    id: "04",
    title: "Creative",
    text: "Find fresh ways to think, make and share work that connects with people.",
  },
];

export const featuredCourse = {
  eyebrow: "A practical place to start",
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into clear, thoughtful product experiences. Explore the research, structure and interaction choices that make digital products easier to use.",
  instructor: {
    name: "Maya Chen",
    role: "Senior Product Designer",
  },
  meta: ["8 lessons", "2h 40min", "Intermediate"],
};

export const steps: Step[] = [
  {
    id: "01",
    title: "Choose what matters to you",
    text: "Start with a skill you want to build and find a course that fits your goals.",
    shape: "square",
  },
  {
    id: "02",
    title: "Learn from people who do the work",
    text: "Get practical guidance from experienced professionals who use these skills every day.",
    shape: "orange",
  },
  {
    id: "03",
    title: "Put your skills into practice",
    text: "Work through useful exercises and take what you learn into your next project.",
    shape: "sun",
  },
];

export const learnerStory = {
  quote:
    "I used to save course after course and never make time for them. Luma's focused lessons helped me build a learning habit and put new ideas to work.",
  name: "Alex Morgan",
  role: "Product Manager",
};

export const stats: Stat[] = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Categories", href: "#courses" },
      { label: "Featured course", href: "#featured" },
      { label: "How it works", href: "#how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Luma", href: "#how-it-works" },
      { label: "Our community", href: "#people" },
      { label: "For teams", href: "#contact" },
      { label: "Get in touch", href: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Course guidance", href: "#contact" },
      { label: "General questions", href: "#contact" },
      { label: "Contact us", href: "#contact" },
    ],
  },
];
