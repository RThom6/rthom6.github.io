import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        <Hero />
      </div>
    </main>
  );
}
