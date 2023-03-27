import React from "react";
import { useRouter } from "next/router";
import { KPITable } from "@/components/KPITable";
import { Button } from "@/components/Button";
import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Team = () => {
  const router = useRouter();
  const { team } = router.query;

  return (
    <div>
      <div className="flex items-center font-semibold">
        <Link href={"/"}>
          <Button>
            <span className="gradient-hover text-lg px-2">Back</span>
          </Button>
        </Link>
        <h1 className="gradient-text text-5xl align-middle justify-center flex w-full gap-2">
          <span>
            <ChartBarSquareIcon height={50} width={50} className="text-white" />
          </span>
          {team} Team&apos;s KPIs
        </h1>
      </div>
      <KPITable />
    </div>
  );
};

export default Team;
