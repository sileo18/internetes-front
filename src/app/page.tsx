"use client"; // Mantém o "use client" se SearchComponent ou outros elementos interativos precisarem
import Link from "next/link";
import SearchComponent from "./components/SearchComponent"; // Assumindo que está em src/app/components

export default function Home() {
  return (
    // A div externa e o header/footer foram movidos para layout.tsx
    // O main agora se adapta ao espaço restante.
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 gap-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold">INTERNETES</h2>
      
      <SearchComponent />

      <button className="cursor-pointer bg-[#EC4899] hover:bg-[#db357f] text-white px-6 py-3 rounded-full shadow-md font-medium transition">
        Adotar uma palavra
      </button>

      <p className="text-sm text-gray-600 max-w-sm">
        Suporte o Internetes adotando uma palavra!
        <br />
        Veja a lista de palavras já adotadas{" "}
        <Link href="#" className="underline hover:text-[#EC4899]">
          aqui
        </Link>.
      </p>
    </main>
  );
}