"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { IconCloudDemo } from "./Skill"

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <IconCloudDemo />
    </WavyBackground>
  );
}
