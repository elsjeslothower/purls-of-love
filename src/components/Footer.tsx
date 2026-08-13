import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 py-8">
      <p className="font-mono text-xs text-foreground-muted">
        © {new Date().getFullYear()} {site.orgName}. {site.footer.builtWith}
      </p>
    </footer>
  );
}
