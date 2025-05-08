import { Container, Typography, Paper, Box, Button, SvgIcon } from '@mui/material';
import Link from 'next/link';
import ConstructionIcon from '@mui/icons-material/Construction'; // Ícone de "em construção"
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'; // Ícone de agradecimento

export default function AdotarPalavraEmBrevePage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-8 px-4 sm:py-12 sm:px-6 text-center">
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, sm: 4, md: 5 },
            borderRadius: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <SvgIcon
            component={ConstructionIcon}
            sx={{ fontSize: 60, color: 'primary.main' }} // Usando a cor primária do tema
          />

          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            "Adotar uma Palavra" - Em Breve!
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Estamos super animados para lançar a funcionalidade que permitirá a você "adotar" suas gírias favoritas e apoiar o Internetes! ATECUBANOS!!
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Nossa equipe (de uma pessoa só, por enquanto! 😉) está trabalhando duro para deixar tudo pronto. Com sua ajuda, poderemos manter o site no ar, adicionar mais termos e criar novas ferramentas para desvendar o "dialeto digital".
          </Typography>
          <Typography variant="h6" color="secondary.main" sx={{ fontWeight: 'medium', mt: 2, mb:1 }}>
             Muito obrigado pelo seu interesse e paciência!
          </Typography>
           <SentimentVerySatisfiedIcon color="secondary" sx={{fontSize: 40}}/>

          <Button
            variant="contained"
            color="primary"
            component={Link}
            href="/"
            sx={{ mt: 3, borderRadius: '50px', px: 4, textTransform: 'none', fontWeight: 'bold' }}
          >
            Voltar para a Home
          </Button>
        </Paper>
      </Container>
    </main>
  );
}