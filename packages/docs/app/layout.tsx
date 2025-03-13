"use client";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import NavBar from "../components/navigation/NavBar";
import SideBar from "../components/navigation/SideBar";
import FloatingMenu, { MenuItem } from "../components/navigation/FloatingMenu";
import BottomNavigation from "../components/navigation/BottomNavigation";
import { usePathname } from "next/navigation";
import { menuItemsMap, nudgesMenu } from "../utils/menuItems";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
      setTimeout(() => {
        setShowSpinner(false);
      }, 300);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  let menuItems: MenuItem[] = [];

  if (pathname.startsWith("/nudges/")) {
    menuItems = nudgesMenu.map((item) => ({ ...item }));
    const pageSpecificMenu = menuItemsMap[pathname];
    if (pageSpecificMenu) {
      const idx = menuItems.findIndex(
        (item) => item.id === "implementation-resources"
      );
      if (idx !== -1) {
        menuItems[idx] = {
          ...menuItems[idx],
          children: pageSpecificMenu,
        };
      }
    }
  } else {
    menuItems = menuItemsMap[pathname] || [];
  }

  return (
    <html lang="en">
      <body className="min-h-screen text-customBlack no-underline">
        {showSpinner && (
          <div
            className={
              isLoaded ? "spinnerOverlay animate-fadeOut" : "spinnerOverlay"
            }
          >
            <span className=" uppercase animate-pulse font-bold text-customLightLightBlue text-4xl sm:text-5xl md:text-6xl font-grotesk mb-14 sm:mb-20">
              Nudge Library
            </span>
          </div>
        )}

        <NavBar />
        <div className="flex font-inter">
          <SideBar />
          <main className="w-[100%] lg:w-[77%] xl:w-[60%] mx-auto ml-[0px] lg:ml-[23%] xl:ml-[19%] min-h-screen overflow-y-auto">
            <div className="max-w-6xl mx-auto fade-in">
              {children}
              <BottomNavigation />
            </div>
          </main>
          <aside className="hidden xl:block xl:w-[21%]">
            {menuItems.length > 0 && <FloatingMenu menuItems={menuItems} />}
          </aside>
        </div>
      </body>
    </html>
  );
}
