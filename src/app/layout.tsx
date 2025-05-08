import Link from "next/link";
import MailIcon from '@mui/icons-material/Mail';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Internetes',
  description: 'Tudo o que você precisa para entender os jovens',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.className} antialiased`}> {/* Adicionado antialiased para suavização de fontes */}
      <body>
        <div className="min-h-screen text-[#1F2937] font-sans flex flex-col">
          <header
            className="
              bg-gradient-to-r from-[#8B5CF6] to-[#7c3aed] /* Gradiente sutil */
              text-white
              px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 /* Ajuste no padding horizontal para ser mais consistente */
              py-4
              flex justify-between items-center
              shadow-lg /* Sombra um pouco mais pronunciada */
              sticky top-0 z-50 /* Deixa o header fixo no topo ao rolar */
            "
          >
            <Link
              href="/"
              className="
                text-2xl sm:text-3xl font-bold /* Aumenta um pouco o logo em telas menores */
                hover:text-purple-200 transition-all duration-300 ease-in-out
                hover:scale-105 /* Efeito de leve zoom no hover */
                focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50 rounded
              "
            >
              Internetes
            </Link>
            <div className="text-right"> {/* Envolver o parágrafo em uma div para melhor controle se necessário */}
              <p className="text-xs sm:text-sm leading-tight hidden sm:block text-purple-100"> {/* Cor mais suave para o slogan */}
                Tudo o que você precisa<br />
                para entender os jovens
              </p>
            </div>
          </header>

          {/* O conteúdo da página será renderizado aqui */}
          <div className="flex-1"> {/* Esta div garante que o footer seja empurrado para baixo corretamente */}
            {children}
          </div>

          <footer className="bg-gradient-to-r from-[#8B5CF6] to-[#7c3aed] text-gray-200 py-6 mt-auto"> {/* Gradiente no footer também, e mais padding */}
            <div className="container mx-auto px-4"> {/* Adicionado container para centralizar o conteúdo do footer */}
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <Link href="/contato" className="hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                  <MailIcon fontSize="small" /> Contato
                </Link>
                <Link href="/sobre" className="hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                  <InfoIcon fontSize="small" /> Sobre
                </Link>
                <Link href="https://github.com/sileo18" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                  <GitHubIcon fontSize="small" /> GitHub
                </Link>
              </div>
              <p className="text-center text-xs text-purple-300 mt-6">
                © {new Date().getFullYear()} Internetes. Todos os direitos reservados.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}