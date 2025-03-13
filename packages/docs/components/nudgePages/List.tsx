import React from "react";
import ListItem from "./ListItem";

interface ListProps {
  items: string[];
  type?: "checked" | "numbered";
}

export default function List({ items, type = "checked" }: ListProps) {
  return (
    <ul className="space-y-2.5 my-4">
      {items.map((item, i) => (
        <ListItem
          key={i}
          type={type}
          index={type === "numbered" ? i + 1 : undefined}
        >
          {item}
        </ListItem>
      ))}
    </ul>
  );
}
