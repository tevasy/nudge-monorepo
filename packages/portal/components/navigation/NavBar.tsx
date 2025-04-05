"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function MobileSideBar() {
  const pathname = usePathname();
  const linkClasses = (path: string) =>
    `block py-1.5 my-1 pl-4 mr-4 rounded-lg transition ${
      pathname === path
        ? "font-semibold active-indicator"
        : "hover:bg-customLightLightBlue"
    }`;

  return (
    <aside className="p-5">
      <div className="pb-7">
        <p className="pt-6 font-semibold uppercase text-customDarkGray mb-3 text-sm tracking-wide">
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
        <p className="font-semibold uppercase text-customDarkGray mb-3 text-sm tracking-wide">
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

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      closeMenu();
    }
  }, [pathname]);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <nav
        className={`
          relative
          flex 
          justify-center 
          items-center 
          h-16 
          sticky 
          top-1 
          z-20 
          transition-all 
          duration-500 
          ease-in-out 
          bg-white/50  
          border-b
          backdrop-blur-lg
          ${
            isScrolled
              ? "shadow-lg rounded-3xl w-[97%] border-transparent"
              : "w-full border-customGray"
          }
        `}
        style={{ margin: "0 auto" }}
      >
        {/* Hamburger icon positioned absolutely on the left */}
        <button className="absolute left-4 lg:hidden" onClick={openMenu}>
          <svg
            className="w-6 h-6 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Logo */}
        <Link href="/overview">
          <span className="uppercase font-bold text-customBlack text-2xl mb-1 font-grotesk">
            Nudge
            <span className="inline-block w-2.5 h-2.5 rounded-full ml-3.5 mr-3.5 mb-1 bg-customOrange will-change-transform animate-[pulseColor_2s_infinite_ease-in-out]"></span>
            Portal
          </span>
        </Link>
      </nav>

      {/* Mobile Menu Overlay */}
      {(menuOpen || isClosing) && (
        <div className="fixed inset-0 z-40 flex">
          {/* Semi-transparent background with fading animation */}
          <div
            className={`fixed inset-0 bg-black ${
              isClosing ? "animate-fadeOut50" : "animate-fadeIn50"
            }`}
            onClick={closeMenu}
          ></div>
          {/* Sliding menu with conditional animation */}
          <div
            className={`relative z-50 w-80 bg-white h-full shadow-xl transform transition-transform duration-300 overflow-y-auto ${
              isClosing ? "animate-slideOut" : "animate-slideIn"
            }`}
          >
            {/* Close button */}
            <button onClick={closeMenu} className="absolute top-4 right-4 p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <MobileSideBar />
          </div>
        </div>
      )}
    </>
  );
}
