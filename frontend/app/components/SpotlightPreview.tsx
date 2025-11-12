"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";
import Link from "next/link";

export default function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex flex-col items-center justify-center w-full px-4 text-center">
      {/* Animated Flip Heading */}
      <motion.div
        className="relative flex flex-col items-center justify-center gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="flex flex-wrap justify-center items-center gap-3 text-xl sm:text-6xl lg:text-8xl font-extrabold font-sans bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white leading-tight">
          <span className="text-gray-700 tracking-tight  dark:text-white ">
            Automate Your
          </span>
          <LayoutTextFlip
            words={[
              "Workflows",
              "Notion",
  "Google Sheets",
  "Google Docs",
  "Gmail",
  "GitHub",
  "Slack",
  "Google Calendar"
            ]}
            className="text-orange-500 font-extrabold"
          />
        </h2>
      </motion.div>

      {/* Subtitle */}
      <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-neutral-700 dark:text-neutral-400">
        Connect your apps, build{" "}
        <span className="text-orange-500 font-semibold">automated flows</span>, 
        and let your ideas work for you — all without writing a single line of code.
      </p>


    </BackgroundLines>
  );
}
