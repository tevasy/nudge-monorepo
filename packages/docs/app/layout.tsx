"use client";
import "../styles/globals.css";
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

  let menuItems: MenuItem[] = [];

  if (pathname.startsWith("/nudges/")) {
    // Clone the base nudgesMenu to avoid mutating the original.
    menuItems = nudgesMenu.map((item) => ({ ...item }));
    // If there are page-specific submenus, merge them into the "implementation-resources" item.
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
        <NavBar />
        <div className="flex font-inter">
          <SideBar />
          <main className="w-[100%] lg:w-[77%] xl:w-[60%] mx-auto ml-[0px] lg:ml-[23%] xl:ml-[19%] min-h-screen overflow-y-auto">
            <div className="max-w-6xl mx-auto">
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
