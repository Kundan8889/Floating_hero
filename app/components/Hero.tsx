"use client";

import FloatingCard from "./FloatingCard";
import { Gavel, ReceiptText, CheckSquare, DollarSign } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-[#F4F6FB] px-10 pt-10">

      {/* ===== LEFT BACKGROUND STRIPS ===== */}
      <div className="absolute -left-10 top-[390px] w-[170px] h-[70px] bg-[#D7DEF5] opacity-70 rounded-full origin-bottom rotate-[-8deg]" />

      <div className="absolute -left-32 bottom-50 w-[340px] h-[70px] bg-[#D7DEF5] opacity-70 rounded-full" />
      <div className="absolute -left-4 bottom-28 w-[400px] h-[70px] bg-[#D7DEF5] opacity-70 rounded-full" />

      {/* ===== RIGHT BACKGROUND STRIPS ===== */}
      <div className="absolute -right-40 top-34 w-[370px] h-[70px] bg-[#D7DEF5] opacity-70 rounded-full origin-bottom rotate-[8deg]" />
      <div className="absolute -right-32 top-56 w-[490px] h-[70px] bg-[#D7DEF5] opacity-70 rounded-full" />
      <div className="absolute -right-44 top-80 w-[400px] h-[70px] bg-[#D7DEF5] opacity-70 rounded-full" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 relative z-10">

        {/* ===== LEFT SIDE ===== */}
        <div>
          <h1 className="text-[56px] md:text-[68px] font-light text-[#73789C] leading-[1.05] tracking-tight">
            A single platform to <br />
            <span className="font-semibold text-[#5C628C]">
              manage every 
            </span>{" "}
            part of your{" "}
            <span className="font-semibold text-[#5C628C]">
              legal work
            </span>
          </h1>

          <p className="mt-6 text-blue-600 text-lg max-w-lg leading-relaxed">
            Track matters, coordinate schedules, manage clients,
            centralize documents, and handle communication —
            all in one system.
          </p>
        </div>

        {/* ===== RIGHT SIDE ===== */}
       <div className="relative h-[420px] hidden md:block">

  <FloatingCard
    icon={DollarSign}
    label="Billing"
    color="blue"
    rotation={13}
    className="top-87 right-125"
  />

  <FloatingCard
    icon={Gavel}
    label="Matters"
    color="orange"
    rotation={-8}
    className="top-110 right-230"
  />

  <FloatingCard
    variant="portal"
    rotation={7}
    className="top-122 right-108"
  />

  <FloatingCard
    icon={CheckSquare}
    label="Tasks"
    color="dark"
    rotation={2}
    className="top-146 right-184"
  />

  <FloatingCard
    icon={ReceiptText}
    label="Documents"
    color="dark"
    rotation={-8}
    className="top-155 right-54"
  />

</div>


      </div>
    </section>
  );
}
