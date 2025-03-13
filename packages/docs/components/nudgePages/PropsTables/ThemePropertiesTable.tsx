import React from "react";

export interface ThemePropertyRow {
  propName: string;
  cssProperties: string[];
  description: string;
}

interface ThemePropertiesTableProps {
  data: ThemePropertyRow[];
}

export default function ThemePropertiesTable({
  data,
}: ThemePropertiesTableProps) {
  return (
    <table className="w-full border-separate rounded-b-2xl border-spacing-0 overflow-hidden text-[12px] sm:text-[13px] md:text-sm">
      <thead>
        <tr>
          <th className="bg-customLightBlue text-left py-3 px-4 w-[23%]">
            Prop Name
          </th>
          <th className="bg-customLightBlue text-left py-3 px-4 w-[47%]">
            CSS Properties
          </th>
          <th className="bg-customLightBlue text-left py-3 px-4 w-[30%]">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="bg-customLightLightLightBlue break-all py-2.5 px-4 font-mono text-[10px] sm:text-xs md:text-sm w-[23%]">
              {row.propName}
            </td>
            <td className="bg-customLightLightLightBlue break-all py-2.5 px-4 w-[47%]">
              {row.cssProperties.map((typeValue, i, arr) => (
                <React.Fragment key={i}>
                  <span
                    className={`inline-block mb-1 px-1 py-0.5 rounded font-mono m-1 text-[10px] sm:text-xs md:text-[13px] ${
                      typeValue !== "–"
                        ? "bg-customLightLightBlue"
                        : "bg-transparent"
                    }`}
                  >
                    {typeValue}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="bg-transparent mb-1 text-[10px] sm:text-xs md:text-[13px]">
                      {" | "}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </td>
            <td className="bg-customLightLightLightBlue py-2.5 px-4 leading-normal w-[30%]">
              {row.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
