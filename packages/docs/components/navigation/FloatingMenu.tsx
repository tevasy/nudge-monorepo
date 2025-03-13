"use client";
import React, { useEffect, useRef, useState } from "react";

export interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
}

interface FloatingMenuProps {
  menuItems: MenuItem[];
}

export default function FloatingMenu({ menuItems }: FloatingMenuProps) {
  const isClickScrolling = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeSection, setActiveSection] = useState<string>(
    menuItems[0]?.id || ""
  );

  const handleScroll = () => {
    if (isClickScrolling.current) return;

    const sections = document.querySelectorAll("section[id]");
    let currentSectionId = menuItems[0]?.id || "";

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < 100) {
        currentSectionId = section.id;
      }
    });

    setActiveSection(currentSectionId);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setActiveSection(menuItems[0]?.id || "");
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  const handleMenuClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -90;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

      isClickScrolling.current = true;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        isClickScrolling.current = false;
      }, 700);
    }
  };

  const isItemActive = (item: MenuItem): boolean => {
    return item.id === activeSection;
  };

  const hasActiveChild = (item: MenuItem): boolean => {
    return item.children
      ? item.children.some(
          (child) => isItemActive(child) || hasActiveChild(child)
        )
      : false;
  };

  const renderMenuItems = (items: MenuItem[], depth: number = 0) => {
    return (
      <ul className="space-y-1.5 text-[15px]">
        {items.map((item) => {
          const active = isItemActive(item);
          return (
            <li key={item.id}>
              <button
                onClick={() => handleMenuClick(item.id)}
                className={`w-full text-left block rounded-lg pr-4 py-0.5 transition cursor-pointer ${
                  active
                    ? "font-semibold active-indicator"
                    : "hover:bg-customLightLightBlue"
                }`}
              >
                <span className={`pl-4 ${depth > 0 ? "ml-4" : ""}`}>
                  {item.label}
                </span>
              </button>
              {item.children && item.children.length > 0 && (
                <div className={depth === 0 ? "mt-1.5" : ""}>
                  {renderMenuItems(item.children, depth + 1)}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className="fixed top-[100px] bg-white pl-4 max-w-xs max-h-[calc(100vh-100px)] overflow-y-auto">
      <p className="font-semibold uppercase text-customDarkGray mb-4 text-[13px] tracking-wide">
        On this page
      </p>
      {renderMenuItems(menuItems)}
    </nav>
  );
}
