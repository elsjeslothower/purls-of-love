import { links } from "@/lib/links";

const orgName = "Purls of Love";
const builtWith = "Made with care by a volunteer.";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-8">
      <p className="font-mono text-xs text-foreground-muted">
        © {new Date().getFullYear()} {orgName}. {builtWith}
      </p>
      <p className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-foreground-muted">
        <a href={links.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-berry">
          Instagram
        </a>
        <a href={links.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-berry">
          Facebook
        </a>
        <a href={`mailto:${links.email}`} className="hover:text-berry">
          {links.email}
        </a>
      </p>
    </footer>
  );
}
