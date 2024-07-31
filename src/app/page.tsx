import Trading from "@/components/raffle";
import Image from "next/image";
import { useAccount } from "wagmi";

export default function Home() {
  return (
    <main className="min-h-[calc(100svh-80px)]">
      <Trading />
    </main>
  );
}
