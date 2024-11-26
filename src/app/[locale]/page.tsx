"use client";

import { createScopedLogger } from "@/utils/logger";
import { emitter } from "@/utils/mitt";
import { useEffect } from "react";

const logger = createScopedLogger("Home");

export default function Home() {
  logger.info("Hello, Welcome to 302.AI");
  useEffect(() => {
    emitter.emit("ToastSuccess", {
      code: 2000,
      message: "Hello, Welcome to 302.AI",
    });
  }, []);
  return (
    <div className="flex flex-1 items-center justify-center text-2xl">
      Hello, Welcome to 302.AI
    </div>
  );
}
