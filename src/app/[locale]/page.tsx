"use client";

import { useEffect } from "react";
import { createScopedLogger } from "@/utils/logger";

const logger = createScopedLogger("Home");

export default function Home() {
  useEffect(() => {
    logger.info("Hello, Welcome to 302.AI");
  }, []);
  return (
    <div className="flex flex-1 items-center justify-center text-2xl">
      Hello, Welcome to 302.AI
    </div>
  );
}
