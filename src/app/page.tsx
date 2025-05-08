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
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              color: '#8B5CF6', // Sua cor lilás
              fontSize: { xs: '2.5rem', sm: '3rem' } // Tamanho de fonte responsivo
            }}
          >
            INTERNETÊS
          </Typography>

          {/* Componente de busca. Idealmente, ele também usaria TextField do MUI por dentro */}
          <Box sx={{ width: '100%', maxWidth: '400px', alignSelf: 'center' }}>
            <SearchComponent />
          </Box>


          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#EC4899', // Sua cor rosa
              '&:hover': {
                backgroundColor: '#db357f', // Rosa um pouco mais escuro para hover
              },
              borderRadius: '50px', // Botão bem arredondado
              px: { xs: 3, sm: 5 }, // Padding horizontal responsivo
              py: 1.5,
              textTransform: 'none',
              fontWeight: 'bold',
              alignSelf: 'center', // Para centralizar o botão se o Paper for flex
            }}
            // Se o botão navegar para outra página, pode usar o componente Link do Next.js:
            // component={Link}
            // href="/adotar-palavra" // Exemplo de rota
          >
            Adotar uma palavra
          </Button>

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