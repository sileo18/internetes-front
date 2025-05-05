"use client";
import Link from "next/link";
import SearchComponent from "./components/SearchComponent";
import MailIcon from '@mui/icons-material/Mail';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF5FF] text-[#1F2937] font-sans flex flex-col">
      <header className="bg-[#8B5CF6] text-white px-96 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Internetes</h1>
        <p className="text-sm text-right leading-tight hidden sm:block">
          Tudo o que você precisa<br />
          para entender os jovens
        </p>
      </header>

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

      <footer className="bg-[#8B5CF6] text-gray-300 py-4">
        <div className="flex justify-center space-x-8">
          <Link href="/contato" className="hover:underline hover:text-gray-100 transition-colors duration-100 flex gap-1">
            Contato
            <MailIcon />
          </Link>

          <Link href="/sobre" className="hover:underline hover:text-gray-100 transition-colors duration-100 flex gap-1">
            Sobre
            <InfoIcon />
          </Link>
          <Link href="https://github.com/seu-usuario" target="_blank" className="hover:underline hover:text-gray-100 transition-colors duration-100 flex gap-1">
            GitHub
            <GitHubIcon />
          </Link>
        </div>
      </footer>
    </div>
  );
}
