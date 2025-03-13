"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `block py-1.5 my-1 pl-4 mr-4 rounded-lg transition ${
      pathname === path
        ? "font-semibold active-indicator"
        : "hover:bg-customLightLightBlue"
    }`;

  return (
    <aside className="hidden lg:block xl:block lg:w-[23%] xl:w-[19%] fixed top-17 bottom-0 pl-6 overflow-y-auto border-r border-customGray pt-12 pl-0 text-[15px]">
      <div className="pb-7">
        <p className="font-semibold uppercase text-customDarkGray mb-3 text-[13px] tracking-wide">
          Getting Started
        </p>
        <Link href="/overview">
          <div className={linkClasses("/overview")}>Overview</div>
        </Link>
        <Link href="/installation">
          <div className={linkClasses("/installation")}>Installation</div>
        </Link>
      </div>
      <div className="pb-7">
        <p className="font-semibold uppercase text-customDarkGray mb-3 text-[13px] tracking-wide">
          Nudge Patterns
        </p>
        <Link href="/nudges/default-options-nudge">
          <div className={linkClasses("/nudges/default-options-nudge")}>
            Default Options Nudge
          </div>
        </Link>
        <Link href="/nudges/anchoring-nudge">
          <div className={linkClasses("/nudges/anchoring-nudge")}>
            Anchoring Nudge
          </div>
        </Link>
        <Link href="/nudges/reminder-nudge">
          <div className={linkClasses("/nudges/reminder-nudge")}>
            Reminder Nudge
          </div>
        </Link>
        <Link href="/nudges/social-norms-nudge">
          <div className={linkClasses("/nudges/social-norms-nudge")}>
            Social Norms Nudge
          </div>
        </Link>
        <Link href="/nudges/reflection-nudge">
          <div className={linkClasses("/nudges/reflection-nudge")}>
            Reflection Nudge
          </div>
        </Link>
        <Link href="/nudges/decision-friction-nudge">
          <div className={linkClasses("/nudges/decision-friction-nudge")}>
            Decision Friction Nudge
          </div>
        </Link>
        <Link href="/nudges/confidence-nudge">
          <div className={linkClasses("/nudges/confidence-nudge")}>
            Confidence Nudge
          </div>
        </Link>
      </div>
    </aside>
  );
}
