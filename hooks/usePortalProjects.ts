"use client";

import { useEffect, useState } from "react";
import { defaultPortalProjects, PortalProject, readPortalProjects, writePortalProjects } from "@/lib/portal";

export function usePortalProjects() {
  const [projects, setProjects] = useState<PortalProject[]>(defaultPortalProjects);

  useEffect(() => {
    const sync = () => setProjects(readPortalProjects());
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("visioncore-portal-update", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("visioncore-portal-update", sync);
    };
  }, []);

  function updateProjects(next: PortalProject[]) {
    setProjects(next);
    writePortalProjects(next);
  }

  return { projects, updateProjects };
}
