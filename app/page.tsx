import Search from "./search";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 h-screen w-full max-w-lg px-4">
      <h1 className="text-4xl">$USA - United States of America - 🇺🇸</h1>
      <span>just a explorer</span>

      <Search />
    </main>
  );
}
