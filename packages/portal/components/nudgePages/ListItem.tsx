import React from "react";
import { FiCheck } from "react-icons/fi";

const FiCheckIcon = FiCheck as unknown as React.FC<
  React.SVGProps<SVGSVGElement>
>;

interface ListItemProps {
  type?: "checked" | "numbered";
  index?: number;
  children: React.ReactNode;
}

export default function ListItem({ type, index, children }: ListItemProps) {
  return (
    <li className="flex">
      <div className="w-6 mr-2">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-customLightOrange text-customOrange mt-0.5">
          {type === "checked" ? (
            <FiCheckIcon className="w-3 h-3" style={{ strokeWidth: 3 }} />
          ) : type === "numbered" ? (
            <span className="text-xs font-semibold font-grotesk mb-0.5">
              {index}
            </span>
          ) : null}
        </div>
      </div>
      <span>{children}</span>
    </li>
  );
}
