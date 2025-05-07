import Link from "next/link";
import MailIcon from '@mui/icons-material/Mail'; // Precisaremos desses ícones no layout
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';
import type { Metadata } from 'next'; // Para metadados (opcional, mas bom ter)
import './globals.css'; // Importar estilos globais
import { Inter } from 'next/font/google';


const inter = Inter({
  subsets: ['latin'], // Subconjuntos de caracteres
  display: 'swap',    // Estratégia de carregamento
  variable: '--font-inter', // Opcional: para usar como variável CSS
});

// Se você tiver metadados, defina-os aqui
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
    <html lang="pt-BR" className={inter.className}> {/* Adicionar lang ao html */}
      <body> {/* O Next.js adiciona o body por padrão se não tiver um, mas é bom ser explícito */}
        <div className="min-h-screen bg-[#FAF5FF] text-[#1F2937] font-sans flex flex-col">
          <header className="bg-[#8B5CF6] text-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-96 py-4 flex justify-between items-center shadow-md">
            <Link href="/" className="text-2xl font-bold"> {/* Link para a Home */}
              Internetes
            </Link>
            <p className="text-sm text-right leading-tight hidden sm:block">
              Tudo o que você precisa<br />
              para entender os jovens
            </p>
          </header>

          {/* O conteúdo da página será renderizado aqui */}
          {children} 

          <footer className="bg-[#8B5CF6] text-gray-200 py-4 mt-auto"> {/* mt-auto para empurrar o footer para baixo */}
            <div className="flex justify-center space-x-8">
              <Link href="/contato" className="hover:underline hover:text-gray-100 transition-colors duration-100 flex items-center gap-1">
                Contato
                <MailIcon fontSize="small" /> {/* Controlar tamanho do ícone */}
              </Link>
              <Link href="/sobre" className="hover:underline hover:text-gray-100 transition-colors duration-100 flex items-center gap-1">
                Sobre
                <InfoIcon fontSize="small" />
              </Link>
              <Link href="https://github.com/lucassilva-web" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gray-100 transition-colors duration-100 flex items-center gap-1">
                GitHub
                <GitHubIcon fontSize="small" />
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}