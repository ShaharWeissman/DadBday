"use client"; // For React hooks (App Router)

import { useState } from "react";
import EraTimeline from "@/app/components/timeline/EraTimeline";
import timelineData from "@/data/timelineData";

const eras = timelineData;

export default function TimelinePage() {
  const [current, setCurrent] = useState(0);

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 pb-20">
      <EraTimeline current={current} setCurrent={setCurrent} />
    </main>
  );
}
