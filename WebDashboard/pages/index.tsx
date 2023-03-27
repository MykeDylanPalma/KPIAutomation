import { Button } from "@/components/Button";
import Link from "next/link";
import Lottie from "react-lottie";
import animationData from "@/lotties/animation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Home() {
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="mt-10 text-5xl mb-20 font-extrabold bg-gradient-to-r from-[#aa00e9] via-[#6b4ef9] to-[#2c50f1] bg-clip-text text-transparent">
        Welcome to KPIs Dashboard!
      </h1>
      <Lottie options={defaultOptions} height={400} width={600} />
      <h3 className="mt-20 text-4xl font-semibold">
        Select a team to view KPIs:
      </h3>
      <ul className="mt-8 max-w-md flex flex-col gap-4">
        <li>
          <Link href={"PayBack"}>
            <Button>
              <span className="text-3xl font-semibold gradient-hover">
                PayBack
              </span>
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
