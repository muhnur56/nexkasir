import Navbar from "@/src/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#ffffff]">
        <section
          id="home"
          className="flex min-h-screen items-center justify-center"
        >
          <h1 className="text-5xl font-bold text-white">
            NexKasir
          </h1>
        </section>
      </main>
    </>
  );
}