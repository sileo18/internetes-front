"use client";
import Link from "next/link";
import {
  Container,
  Paper,
  Typography,
  Button,
  Stack,
  Box
} from '@mui/material';
import MuiLink from '@mui/material/Link'; // Para estilizar links como MUI
import SearchComponent from "./components/SearchComponent";
import CoffeeIcon from '@mui/icons-material/Coffee';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';



export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-8 sm:py-16">
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, sm: 4, md: 5 }, // Padding responsivo
            borderRadius: 3, // Bordas mais arredondadas
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 4, // Espaçamento entre elementos do Stack (MUI v5+)
          }}
        >
          <QuestionAnswerOutlinedIcon sx={{ fontSize: { xs: '2.2rem', sm: '2.7rem' }, color: '#8B5CF6', transform: 'scaleX(-1)' }} /> {/* Ícone */}
            <Typography
              variant="h2"
              component="h1"              
              sx={{
                // fontFamily: "'Poppins', sans-serif", // Alternativa se não usar className
                fontWeight: 800,
                color: '#8B5CF6',
                fontSize: { xs: '2.5rem', sm: '3rem' },
                letterSpacing: '0.02em',
                fontFamily: 'Poppins, sans-serif', // Usando Poppins para o título
              }}
            >
              INTERNETÊS
            </Typography>

          {/* Componente de busca. Idealmente, ele também usaria TextField do MUI por dentro */}
          <Box sx={{ width: '100%', maxWidth: '400px', alignSelf: 'center' }}>
            <SearchComponent />
          </Box>


          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" alignItems="center">
              {/* Botão Adotar Palavra (Interno - Em Desenvolvimento) */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#EC4899',
                  '&:hover': { backgroundColor: '#DB2777' },
                  borderRadius: '50px', px: 3, py: 1.5, textTransform: 'none', fontWeight:'bold',
                  minWidth: '220px', // Ajuste a largura conforme necessário
                  opacity: 0.6,
                  pointerEvents: 'none',
                }}
                size="large"
                disabled
                startIcon={<FavoriteBorderIcon />}
              >
                Adote uma Palavra
              </Button>

              {/* Botão PixMeACoffee */}
              <Button
                variant="outlined"
                color="primary"
                size="large"
                component="a"
                href="https://pixmeacoffee.vercel.app/adote-palavras"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<CoffeeIcon />} // Ícone de café
                sx={{
                  borderRadius: '50px', px:3, py: 1.5, textTransform: 'none', fontWeight:'medium',
                  minWidth: '220px', // Ajuste a largura
                }}
              >
                Apoie com Pix
              </Button>
            </Stack>

          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 'sm', alignSelf: 'center' }}>
            Suporte o Internetes adotando uma palavra!
            <br />
            Veja a lista de palavras já adotadas{" "}
            <MuiLink
              component={Link} // Integração com Next.js Link
              href="/lista-palavras" // Ajuste o href para a sua rota real
              underline="hover"
              sx={{ color: '#EC4899' }}
            >
              aqui
            </MuiLink>
            .
          </Typography>
        </Paper>
      </Container>
    </main>
  );
}