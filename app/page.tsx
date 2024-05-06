import Search from "./search";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 h-screen w-full max-w-lg px-4">
      <h1 className="text-4xl">$USA - United States of America -  </h1><img src="https://cdn.pixabay.com/animation/2022/09/16/16/43/16-43-33-805_512.gif" alt="USA" width="16" height="16">
      <span>just a explorer</span>

      <Search />
    </main>
  );
}
