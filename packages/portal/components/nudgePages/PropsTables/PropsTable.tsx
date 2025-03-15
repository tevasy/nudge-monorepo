// PropsTable.tsx
import React from "react";

export interface PropsTableRow {
  propName: string;
  type: string;
  defaultValue: string;
  description: string;
}

interface PropsTableProps {
  data: PropsTableRow[];
}

export default function PropsTable({ data }: PropsTableProps) {
  return (
    <table className="w-full border-separate border-b border-customLightBlue border-spacing-0 overflow-hidden text-[12px] sm:text-[13px] md:text-sm">
      <thead>
        <tr>
          <th className="bg-customLightBlue text-left py-3 px-4 w-[23%]">
            Prop Name
          </th>
          <th className="bg-customLightBlue text-left py-3 px-4 w-[40%] sm:w-[27%]">
            Type
          </th>
          <th className="bg-customLightBlue text-left py-3 px-4 w-[20%]">
            Default Value
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
            <td className="bg-customLightLightLightBlue py-2.5 px-4 w-[40%] sm:w-[27%]">
              {row.type.split(" | ").map((typeValue, i, arr) => (
                <React.Fragment key={i}>
                  <span className="inline-block break-all mb-1 bg-customLightLightBlue px-1 py-0.5 rounded font-mono m-1 text-[10px] sm:text-xs md:text-[13px]">
                    {typeValue}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="bg-transparent mb-1 text-[11px] sm:text-xs md:text-[13px]">
                      {" | "}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </td>
            <td className="bg-customLightLightLightBlue break-all py-2.5 px-4 w-[20%]">
              <span
                className={
                  row.defaultValue !== "–" && row.defaultValue !== "Required"
                    ? "bg-customLightLightBlue px-1 py-0.5 rounded font-mono m-1 text-[10px] sm:text-xs md:text-[13px]"
                    : ""
                }
              >
                {row.defaultValue}
              </span>
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
