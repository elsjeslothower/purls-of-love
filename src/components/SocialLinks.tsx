import { links } from "@/lib/links";
import { FacebookIcon, InstagramIcon, MailIcon } from "./icons";

const pillClass =
  "flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:border-mauve hover:text-berry";

// Follow-for-updates and email buttons, reused across the site.
export default function SocialLinks({
  className = "",
  showEmail = true,
}: {
  className?: string;
  showEmail?: boolean;
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href={links.instagramUrl} target="_blank" rel="noopener noreferrer" className={pillClass}>
        <InstagramIcon className="h-4 w-4" />
        Instagram
      </a>
      <a href={links.facebookUrl} target="_blank" rel="noopener noreferrer" className={pillClass}>
        <FacebookIcon className="h-4 w-4" />
        Facebook
      </a>
      {showEmail && (
        <a href={`mailto:${links.email}`} className={pillClass}>
          <MailIcon className="h-4 w-4" />
          {links.email}
        </a>
      )}
    </div>
  );
}
