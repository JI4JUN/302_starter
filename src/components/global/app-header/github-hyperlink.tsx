import { env } from "@/env";
import githubMark from "@/public/svgs/github-mark.svg";
import githubMarkWhite from "@/public/svgs/github-mark-white.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/global/use-theme";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function GithubHyperlink() {
  const githubRepoUrl = env.NEXT_PUBLIC_GITHUB_REPO_URL;
  const { theme } = useTheme();
  const t = useTranslations();

  return (
    <a
      href={githubRepoUrl}
      target="_blank"
      className={cn(githubRepoUrl ? "block" : "hidden")}
    >
      <Button
        variant="icon"
        size="roundIconSm"
        aria-label={t("global.header.github_hyperlink.label")}
      >
        <Image
          className="size-4"
          src={theme === "dark" ? githubMarkWhite : githubMark}
          alt="GitHub"
          width={16}
          height={16}
        />
      </Button>
    </a>
  );
}
