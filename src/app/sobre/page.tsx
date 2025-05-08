import { Container, Typography, Paper, Box, Avatar, Stack, Divider, Button, SvgIcon } from '@mui/material';
// Não precisamos mais do Link do Next.js para este botão específico, mas pode ser usado por outros.
// import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CoffeeIcon from '@mui/icons-material/Coffee';

export default function SobrePage() {
  return (
    <main className="flex-1 flex flex-col items-center py-8 px-4 sm:py-12 sm:px-6">
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, borderRadius: 3, overflow: 'hidden' }}>
          <Box
            sx={{
              height: '8px',
              background: 'linear-gradient(to right, #8B5CF6, #EC4899)',
              margin: '-32px -32px 24px -32px',
              '@media (max-width:600px)': {
                margin: '-16px -16px 16px -16px',
              },
            }}
          />

          <Typography
            variant="h3"
            component="h1"
            textAlign="center"
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}
          >
            Sobre o Internetes
          </Typography>

          {/* Seção: Nossa Missão */}
          <Box mb={5}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
              Decifrando o "Dialeto Digital" para Conectar Gerações
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Sabe aquela conversa com alguém de outra geração em que, de repente, parece que estão falando línguas diferentes? "Reels", "fazer um react", "flopar"... O "Internetes" nasceu justamente de um momento assim! Conversando com minha mãe, percebi como alguns termos super comuns no nosso dia a dia digital podem ser um mistério para outros.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              A ideia é simples: criar um espaço amigável para que qualquer pessoa – pais, avós, professores, profissionais de marketing, ou simplesmente curiosos – possa entender o que significa toda essa "falação" da internet. Nossa missão é ser uma ponte, facilitando a comunicação e a conexão entre diferentes gerações no mundo cada vez mais digital.
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Seção: Quem Somos */}
          <Box mb={5} display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center" gap={{ xs: 2, sm: 3 }}>
            <Avatar
              sx={{
                width: { xs: 80, sm: 100 },
                height: { xs: 80, sm: 100 },
                bgcolor: 'secondary.main',
                fontSize: { xs: '2rem', sm: '2.5rem' }
              }}
            >
              <PersonIcon fontSize="inherit" />
            </Avatar>
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
                Por Trás da Tela
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Olá! Sou o criador do Internetes. Desde sempre imerso nesse universo digital, acompanho de perto a rapidez com que novas palavras e expressões surgem e se popularizam. Este projeto é uma forma de compartilhar esse conhecimento e, quem sabe, ajudar a diminuir um pouco a "barreira linguística" que às vezes aparece.
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Seção: Como Funciona / Nossa Abordagem */}
          <Box mb={5}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
              De Olho nas Tendências
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Manter o "Internetes" atualizado é um trabalho de observação constante. As palavras e gírias que você encontra aqui são fruto de pesquisa e do acompanhamento das conversas que rolam online. O principal critério? Ser um termo que faz parte do vocabulário digital atual, muitas vezes vindo do inglês, mas já incorporado ao nosso jeito de falar na rede.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Ainda estou adicionando os termos "na mão", mas a ideia é que, em breve, a comunidade possa participar ativamente sugerindo novas palavras. Afinal, o "internetes" é construído por todos nós!
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Seção: Junte-se a Nós / Call to Action */}
          <Box textAlign="center">
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
              Bora Nessa? Ajude o Internetes a Crescer!
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
              O Internetes é mais do que um dicionário; é uma comunidade em construção. Sua ajuda é super bem-vinda para mantermos o papo em dia e o conteúdo sempre fresquinho!
            </Typography>
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
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
              (Funcionalidade "Adotar uma Palavra" em desenvolvimento)
            </Typography>

            {/* Botão Compartilhe o Site (mantido) */}
            <Button
                variant="outlined"
                color="primary" // Pode ser uma cor diferente se quiser mais destaque
                size="large"
                component="a"
                href={`https://wa.me/?text=Olha%20que%20legal%20esse%20site%20para%20entender%20gírias%20da%20internet!%20${typeof window !== 'undefined' ? window.location.origin : 'https://SEU_DOMINIO_AQUI.com'}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ borderRadius: '50px', px:3, py: 1.5, textTransform: 'none', fontWeight:'bold', minWidth: '220px', mt:2 }} // Adicionando margem
                startIcon={<ShareIcon />}
              >
                Compartilhe o Site
            </Button>

             <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                E fique de olho! Em breve, você também poderá sugerir novas palavras diretamente por aqui.
            </Typography>
          </Box>

        </Paper>
      </Container>
    </main>
  );
}