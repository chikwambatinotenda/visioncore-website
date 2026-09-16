"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { usePortalProjects } from "@/hooks/usePortalProjects";
import { PortalProject } from "@/lib/portal";

const field = "mt-2 min-h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#FF4D15] focus:ring-2 focus:ring-[#FF4D15]/15";

export default function NewClientForm() {
  const router = useRouter();
  const { projects, updateProjects } = usePortalProjects();
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const initiation = String(data.get("initiationDate"));
    const completion = String(data.get("completionDate"));
    if (new Date(completion) <= new Date(initiation)) { setError("Estimated completion date must be after the initiation date."); return; }
    if (!String(data.get("email")).includes("@")) { setError("Enter a valid contact email."); return; }
    const project: PortalProject = {
      id: `${String(data.get("company")).toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`,
      clientName: String(data.get("clientName")), company: String(data.get("company")), contactEmail: String(data.get("email")), phone: String(data.get("phone")), assignedPassword: String(data.get("password")), serviceType: String(data.get("serviceType")), name: String(data.get("projectName")), startDate: initiation, launchDate: completion, progress: 0, status: "Discovery", techStack: [], milestones: [], finances: [], changeRequests: [],
    };
    updateProjects([...projects, project]);
    router.push(`/admin/projects/${project.id}`);
  }

  return <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"><div className="grid gap-4 md:grid-cols-2"><label className="text-sm font-semibold">Client Name<input required name="clientName" className={field} /></label><label className="text-sm font-semibold">Company Name<input required name="company" className={field} /></label><label className="text-sm font-semibold">Contact Email<input required type="email" name="email" className={field} /></label><label className="text-sm font-semibold">Phone Number<input required name="phone" className={field} /></label><label className="text-sm font-semibold">Assigned Password<input required minLength={8} type="password" name="password" className={field} /></label><label className="text-sm font-semibold">Project Name<input required name="projectName" className={field} /></label><label className="text-sm font-semibold">Service Type<select required name="serviceType" defaultValue="" className={field}><option value="">Select service</option><option>Creative</option><option>Web</option><option>Software</option><option>Cloud</option><option>Growth</option></select></label><label className="text-sm font-semibold">Initiation Date<input required type="date" name="initiationDate" className={field} /></label><label className="text-sm font-semibold md:col-span-2">Est. Completion Date<input required type="date" name="completionDate" className={field} /></label></div>{error && <p className="mt-4 text-sm font-semibold text-red-600">{error}</p>}<button className="mt-6 min-h-11 rounded-full bg-[#FF4D15] px-5 text-sm font-semibold text-white hover:bg-[#E03E0A]">Create Client &amp; Job</button></form>;
}
