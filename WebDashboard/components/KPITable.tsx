import React, { ReactNode } from "react";
import { KPI_LABELS } from "@/constants/kpi";
import {
  ChevronDoubleUpIcon,
  ChevronDoubleDownIcon,
  Bars2Icon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";
import { Data } from "@/types/data";
import { useQuery } from "react-query";

const KPIS = [
  "lttp",
  "ca",
  "crf",
  "mttr",
  "incidents",
  "securityDefects",
  "unitTestCoverage",
  "pipelineFitness",
  "lowestFWVersion",
  "engineeringImprovement",
];

const defaultIconProps = {
  width: 24,
  height: 24,
};

const ragIconConfig: { [key: string]: ReactNode } = {
  "0": <CheckCircleIcon {...defaultIconProps} className="text-green-400" />,
  "1": (
    <ExclamationTriangleIcon
      width={24}
      height={24}
      className="text-yellow-400"
    />
  ),
  "2": <MinusCircleIcon {...defaultIconProps} className="text-red-400" />,
};

const iconConfig: { [key: string]: { [key: string]: ReactNode } } = {
  lttp: {
    "0": <ChevronDoubleUpIcon {...defaultIconProps} className="text-red-400" />,
    "1": (
      <ChevronDoubleDownIcon
        width={24}
        height={24}
        className="text-green-400"
      />
    ),
    "2": <Bars2Icon {...defaultIconProps} className="text-blue-400" />,
  },
  ca: {
    "0": (
      <ChevronDoubleUpIcon {...defaultIconProps} className="text-green-400" />
    ),
    "1": (
      <ChevronDoubleDownIcon {...defaultIconProps} className="text-red-400" />
    ),
    "2": <Bars2Icon {...defaultIconProps} className="text-blue-400" />,
  },
  crf: {
    "0": <ChevronDoubleUpIcon {...defaultIconProps} className="text-red-400" />,
    "1": (
      <ChevronDoubleDownIcon
        width={24}
        height={24}
        className="text-green-400"
      />
    ),
    "2": <Bars2Icon {...defaultIconProps} className="text-blue-400" />,
  },
  mttr: {
    "0": <ChevronDoubleUpIcon {...defaultIconProps} className="text-red-400" />,
    "1": (
      <ChevronDoubleDownIcon {...defaultIconProps} className="text-red-400" />
    ),
    "2": <Bars2Icon {...defaultIconProps} className="text-blue-400" />,
  },
  incidents: {
    "0": <ChevronDoubleUpIcon {...defaultIconProps} className="text-red-400" />,
    "1": (
      <ChevronDoubleDownIcon
        width={24}
        height={24}
        className="text-green-400"
      />
    ),
    "2": <Bars2Icon {...defaultIconProps} className="text-blue-400" />,
  },
  securityDefects: {
    "0": <ChevronDoubleUpIcon {...defaultIconProps} className="text-red-400" />,
    "1": (
      <ChevronDoubleDownIcon
        width={24}
        height={24}
        className="text-green-400"
      />
    ),
    "2": <Bars2Icon {...defaultIconProps} className="text-blue-400" />,
  },
  unitTestCoverage: {
    "0": (
      <ChevronDoubleUpIcon {...defaultIconProps} className="text-green-400" />
    ),
    "1": (
      <ChevronDoubleDownIcon {...defaultIconProps} className="text-red-400" />
    ),
    "2": <Bars2Icon {...defaultIconProps} className="text-blue-400" />,
  },
  pipelineFitness: {
    "0": (
      <ChevronDoubleUpIcon {...defaultIconProps} className="text-green-400" />
    ),
    "1": (
      <ChevronDoubleDownIcon {...defaultIconProps} className="text-red-400" />
    ),
    "2": <Bars2Icon {...defaultIconProps} className="text-blue-400" />,
  },
  lowestFWVersion: {
    "0": (
      <ChevronDoubleUpIcon {...defaultIconProps} className="text-green-400" />
    ),
    "1": (
      <ChevronDoubleDownIcon {...defaultIconProps} className="text-red-400" />
    ),
    "2": <Bars2Icon {...defaultIconProps} className="text-blue-400" />,
  },
  engineeringImprovement: {
    "0": (
      <ChevronDoubleUpIcon {...defaultIconProps} className="text-green-400" />
    ),
    "1": (
      <ChevronDoubleDownIcon {...defaultIconProps} className="text-red-400" />
    ),
    "2": <Bars2Icon {...defaultIconProps} className="text-blue-400" />,
  },
};

const getKPIs = async () => {
  const res = await fetch("https://localhost:5001/KAPI/GetSample");
  return res.json();
};

export const KPITable = () => {
  const { data, isLoading, error } = useQuery<Data>("kpis", getKPIs);

  if (isLoading)
    return (
      <div className="flex w-full">
        <div className="flex flex-col mx-auto items-center mt-20">
          <span className="relative flex h-32 w-32">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-32 w-32 bg-sky-500"></span>
          </span>
          <h1 className="text-xl mt-20">Loading...</h1>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="flex w-full justify-center">
        <h1 className="text-xl mt-40 text-center">
          Unexpected error has occurred. Please try refreshing the page.{" "}
        </h1>
      </div>
    );

  if (data)
    return (
      <div className="flex flex-col w-full">
        <div className="inline-block min-w-full mt-20">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col">KPI</th>
                  <th scope="col" className="text-center">
                    Previous
                  </th>
                  <th scope="col" className="text-center">
                    Current
                  </th>
                  <th scope="col" className="text-center">
                    Trend
                  </th>
                  <th scope="col" className="text-center">
                    Status (RAG)
                  </th>
                </tr>
              </thead>
              <tbody>
                {KPIS.map((kpi) => {
                  return (
                    <tr
                      key={kpi}
                      className="font-semibold border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                    >
                      <td className="font-bold whitespace-nowrap py-4">
                        {KPI_LABELS[kpi]}
                      </td>
                      <td className="whitespace-nowrap py-4 text-center">
                        {data.previous[kpi]}
                      </td>
                      <td className="whitespace-nowrap py-4 text-center">
                        {data.current[kpi]}
                      </td>
                      <td className="whitespace-nowrap py-4 text-center">
                        <span className="flex justify-center">
                          {iconConfig[kpi][data.trend[kpi]]}
                        </span>
                      </td>
                      <td className="whitespace-nowrap py-4 text-center">
                        <span className="flex justify-center">
                          {ragIconConfig[data.rag[kpi]]}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};
