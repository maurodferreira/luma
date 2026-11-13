export type NavLink = { label: string; href: string };
export type Category = { id: string; title: string; text: string };
export type Step = { id: string; title: string; text: string; shape: "square" | "orange" | "sun" };
export type Stat = { value: string; label: string };
export type FooterColumn = { title: string; links: NavLink[] };

export const navLinks: NavLink[] = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#contact" },
  { label: "Community", href: "#people" },
  { label: "About", href: "#how-it-works" },
];

export const categories: Category[] = [
  { id: "01", title: "Product Design", text: "Turn complex problems into clear, useful experiences." },
  { id: "02", title: "Technology", text: "Build a stronger understanding of the tools shaping digital products." },
  { id: "03", title: "Business", text: "Develop practical skills for better decisions and stronger teams." },
  { id: "04", title: "Creative", text: "Explore new ways to communicate, create and tell stories." },
];

export const steps: Step[] = [
  { id: "01", title: "Choose your focus", text: "Find courses based on the skill you want to build, not endless content categories.", shape: "square" },
  { id: "02", title: "Learn from experience", text: "Follow concise lessons created by professionals who use these skills.", shape: "orange" },
  { id: "03", title: "Put it into practice", text: "Every course includes practical exercises designed to turn knowledge into action.", shape: "sun" },
];

export const stats: Stat[] = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

export const courseMeta = ["8 lessons", "2h 40min", "Intermediate"];

export const footerColumns: FooterColumn[] = [
  { title: "Explore", links: [
    { label: "Courses", href: "#courses" },
    { label: "Categories", href: "#courses" },
    { label: "Instructors", href: "#people" },
    { label: "For Teams", href: "#contact" },
  ] },
  { title: "Company", links: [
    { label: "About", href: "#how-it-works" },
    { label: "Careers", href: "#" },
    { label: "Journal", href: "#" },
  ] },
  { title: "Support", links: [
    { label: "Help Center", href: "#contact" },
    { label: "Contact", href: "#contact" },
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
  ] },
];
