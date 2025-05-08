import { Container, Typography, Paper, Box, Avatar, Stack, Divider, Button, SvgIcon } from '@mui/material';
import Link from 'next/link';
// Ícone para a seção "Por Trás da Tela" - um exemplo genérico, você pode trocar
import PersonIcon from '@mui/icons-material/Person'; // Ou um ícone que represente você/o projeto
// Ícones para os CTAs
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // Para "Adotar uma palavra"

export default function SobrePage() {
  return (
    <main className="flex-1 flex flex-col items-center py-8 px-4 sm:py-12 sm:px-6">
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, borderRadius: 3, overflow: 'hidden' /* Para cantos arredondados com gradiente */ }}>
          {/* Opcional: Adicionar um toque de cor no topo do Paper */}
          <Box
            sx={{
              height: '8px',
              background: 'linear-gradient(to right, #8B5CF6, #EC4899)', // Gradiente com suas cores
              margin: '-32px -32px 24px -32px', // Ajuste conforme o padding 'p' do Paper
              '@media (max-width:600px)': { // Ajuste para padding xs:2
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
                bgcolor: 'secondary.main', // Usa a cor secundária (rosa) para o fundo do Avatar
                fontSize: { xs: '2rem', sm: '2.5rem' } // Ajusta o tamanho do ícone dentro
              }}
            >
              <PersonIcon fontSize="inherit" /> {/* O ícone herda o tamanho */}
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
              <Button
                variant="contained"
                // color="secondary" // Se sua cor secundária for rosa
                sx={{
                  backgroundColor: '#EC4899', // Cor rosa
                  '&:hover': { backgroundColor: '#DB2777' },
                  borderRadius: '50px', px: 3, py: 1.5, textTransform: 'none', fontWeight:'bold',
                  minWidth: '200px'
                }}
                size="large"
                component={Link}
                href="/adotar-palavra" // Mude para a rota correta se tiver uma página específica
                startIcon={<FavoriteBorderIcon />}
              >
                Adote uma Palavra
              </Button>
              <Button
                variant="outlined"
                color="primary" // Usa a cor primária (lilás)
                size="large"
                // onClick={() => navigator.share ? navigator.share({ title: 'Internetes', text: 'Descubra o significado das gírias da internet!', url: window.location.origin }) : alert('Compartilhe este link: ' + window.location.origin)}
                // O ideal é ter uma forma mais robusta de compartilhar ou um link para redes sociais
                component="a" // Para poder usar href para um link de compartilhamento genérico ou para redes
                href={`https://wa.me/?text=Olha%20que%20legal%20esse%20site%20para%20entender%20gírias%20da%20internet!%20${typeof window !== 'undefined' ? window.location.origin : 'https://internetes.com.br'}`} // Exemplo WhatsApp
                target="_blank"
                rel="noopener noreferrer"
                sx={{ borderRadius: '50px', px:3, py: 1.5, textTransform: 'none', fontWeight:'bold', minWidth: '200px' }}
                startIcon={<ShareIcon />}
              >
                Compartilhe o Site
              </Button>
            </Stack>
             <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                E fique de olho! Em breve, você também poderá sugerir novas palavras diretamente por aqui.
            </Typography>
          </Box>

        </Paper>
      </Container>
    </main>
  );
}