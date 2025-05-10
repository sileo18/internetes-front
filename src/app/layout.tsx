import Link from "next/link";
import MailIcon from '@mui/icons-material/Mail';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';
import type { Metadata } from 'next';
import './globals.css';
import { Inter, Poppins } from 'next/font/google'; // Importar Poppins

// Ícone de exemplo para o logo
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Para CSS se necessário
});

const poppins = Poppins({ // Configuração da Poppins para o logo
  subsets: ['latin'],
  weight: ['700', '800'], // Pesos para o logo
  display: 'swap',
  variable: '--font-poppins-logo', // Variável CSS específica para a fonte do logo
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
    // Adiciona a variável da Poppins ao html para poder usar em qualquer lugar
    <html lang="pt-BR" className={`${inter.className} ${poppins.variable} antialiased`}>
      <body>
        <div className="min-h-screen text-[#1F2937] font-sans flex flex-col">
          <header
            className="
              bg-gradient-to-r from-[#8B5CF6] to-[#7c3aed]
              text-white
              px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
              py-3 sm:py-4 /* Ajuste no padding vertical */
              flex justify-between items-center
              shadow-lg
              sticky top-0 z-50
            "
          >
            <Link
              href="/"
              className="
                flex items-center gap-2 /* Alinha ícone e texto */
                text-xl sm:text-2xl /* Tamanho ajustado para o header */
                font-bold
                hover:text-purple-200 transition-all duration-300 ease-in-out
                hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50 rounded
              "
              style={{ fontFamily: 'var(--font-poppins-logo)' }} // Aplica a fonte Poppins via variável CSS
            >
              <QuestionAnswerOutlinedIcon sx={{ fontSize: '1.1em' }} /> {/* Ícone um pouco maior que o texto, ajuste '1.1em' */}
              Internetes
            </Link>
            <div className="text-right">
              <p className="text-xs sm:text-sm leading-tight hidden sm:block text-purple-100">
                Tudo o que você precisa<br />
                para entender os jovens
              </p>
            </div>
          </header>

          <div className="flex-1">
            {children}
          </div>

          <footer className="bg-gradient-to-r from-[#8B5CF6] to-[#7c3aed] text-gray-200 py-6 mt-auto">
            <div className="container mx-auto px-4">
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