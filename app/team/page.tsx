import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team Standings",
};

export default function Team() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        Team Standings
      </div>
    </>
  );
}
