
"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

export default function InstallPWA() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handleInstall = (event: Event) => {
      event.preventDefault();

      setInstallPrompt(
        event as BeforeInstallPromptEvent
      );
    };

    const handleInstalled = () => {
      setInstalled(true);
      setInstallPrompt(null);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleInstall
    );

    window.addEventListener(
      "appinstalled",
      handleInstalled
    );

    if (
      window.matchMedia("(display-mode: standalone)").matches
    ) {
      setInstalled(true);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleInstall
      );

      window.removeEventListener(
        "appinstalled",
        handleInstalled
      );
    };
  }, []);

  const handleClick = async () => {
    if (!installPrompt) return;

    await installPrompt.prompt();

    const result = await installPrompt.userChoice;

    if (result.outcome === "accepted") {
      setInstalled(true);
    }

    setInstallPrompt(null);
  };

  if (installed) return null;

  return (
    <div className=" flex-col items-start gap-2">
      <button
        onClick={handleClick}
        disabled={!installPrompt}
        className="
          group relative inline-flex items-center
          gap-1 overflow-hidden rounded-xl
          border border-white/30
          bg-black-500/10 px-3 py-3
          text-sm font-medium text-white-400
          transition-all duration-300
          hover:border-green-400
          hover:bg-green-500/20
          hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        <svg
          className="h-5 w-5 transition-transform group-hover:-translate-y-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            d="M12 15V3m0 0L7 8m5-5 5 5M5 14v5a2 2 0 002 2h10a2 2 0 002-2v-5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>
          {installPrompt
            ? "Install Portfolio"
            : "Install Available in Browser"}
        </span>

        <span className="text-xs opacity-60">
          ↗
        </span>
      </button>

      {!installPrompt && (
        <p className="text-xs text-neutral-500">
          
        </p>
      )}
    </div>
  );
}
