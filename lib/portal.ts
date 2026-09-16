export type ProjectStatus = "Discovery" | "In Development" | "Testing & Review" | "Live & Deployed";
export type MilestoneStatus = "Completed" | "In Progress" | "Pending";
export type PaymentStatus = "Paid" | "Outstanding";
export type ChangeStatus = "Submitted" | "Under Review" | "Approved & Scheduled" | "Completed";

export type Milestone = { id: string; title: string; timestamp: string; status: MilestoneStatus };
export type FinancialEntry = { id: string; description: string; amount: number; date: string; status: PaymentStatus; receiptUrl?: string };
export type ChangeRequest = { id: string; type: string; message: string; status: ChangeStatus; reply?: string; createdAt: string };
export type PortalProject = {
  id: string;
  clientName: string;
  company: string;
  contactEmail?: string;
  phone?: string;
  assignedPassword?: string;
  serviceType?: string;
  name: string;
  startDate: string;
  launchDate: string;
  progress: number;
  status: ProjectStatus;
  techStack: string[];
  milestones: Milestone[];
  finances: FinancialEntry[];
  changeRequests: ChangeRequest[];
};

export const defaultPortalProjects: PortalProject[] = [
  {
    id: "sky-house-finishing",
    clientName: "Jordan Moyo",
    company: "Sky House Finishing",
    name: "Sky House Finishing Web Platform",
    startDate: "2026-09-08",
    launchDate: "2026-10-08",
    progress: 75,
    status: "Testing & Review",
    techStack: ["Next.js", "Cloud Hosting", "SEO"],
    milestones: [
      { id: "m1", title: "Brand identity approved", timestamp: "2026-09-09", status: "Completed" },
      { id: "m2", title: "UI/UX approved", timestamp: "2026-09-11", status: "Completed" },
      { id: "m3", title: "Database schema built", timestamp: "2026-09-13", status: "Completed" },
      { id: "m4", title: "Testing & deployment", timestamp: "2026-09-16", status: "In Progress" },
    ],
    finances: [{ id: "INV-2026-001", description: "50% Initial Deposit", amount: 1200, date: "2026-09-08", status: "Outstanding", receiptUrl: "#" }],
    changeRequests: [{ id: "CR-014", type: "Content Update", message: "Please update the services copy on the home page.", status: "Under Review", createdAt: "2026-09-16" }],
  },
];

const STORAGE_KEY = "visioncore-portal-projects";

export function readPortalProjects(): PortalProject[] {
  if (typeof window === "undefined") return defaultPortalProjects;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) return defaultPortalProjects;
  try { return JSON.parse(stored) as PortalProject[]; } catch { return defaultPortalProjects; }
}

export function writePortalProjects(projects: PortalProject[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  window.dispatchEvent(new CustomEvent("visioncore-portal-update"));
}
