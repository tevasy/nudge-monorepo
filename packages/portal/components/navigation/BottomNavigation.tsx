"use client";

import { usePathname, useRouter } from "next/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { pagesList } from "../../utils/pagesList";

export default function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const currentIndex = pagesList.findIndex((page) => page.path === pathname);

  const previousPage = currentIndex > 0 ? pagesList[currentIndex - 1] : null;
  const nextPage =
    currentIndex < pagesList.length - 1 ? pagesList[currentIndex + 1] : null;

  return (
    <div className="flex flex-col md:flex-row px-6 md:px-11 mb-24 md:mb-28 lg:mb-30 mx-auto max-w-4xl gap-3.5 md:gap-5">
      {previousPage && (
        <button
          onClick={() => router.push(previousPage.path)}
          className={`flex items-center justify-start p-5 bg-customLightLightBlue cursor-pointer transition-all duration-300 ease-in-out rounded-xl hover:bg-customLightBlue hover:font-medium 
          ${!nextPage ? "w-full" : "flex-1"}`}
        >
          <FiChevronLeft size={22} className="mr-2" />
          {previousPage.name}
        </button>
      )}

      {nextPage && (
        <button
          onClick={() => router.push(nextPage.path)}
          className={`flex items-center justify-end p-5 bg-customLightLightBlue cursor-pointer transition-all duration-300 ease-in-out rounded-xl hover:bg-customLightBlue hover:font-medium 
          ${!previousPage ? "w-full" : "flex-1"}`}
        >
          {nextPage.name}
          <FiChevronRight size={22} className="ml-2" />
        </button>
      )}
    </div>
  );
}
