import { notFound } from 'next/navigation';
import {
  Container,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Chip,
  Divider,
  Box,
  Stack // Adicionado Stack para melhor layout de sinônimos
} from '@mui/material';

interface WordDetailsProps {
  params: { id: string };
}

interface WordData {
  id: number;
  term: string;
  definition: string;
  partOfSpeech: string;
  examples: { id: number; content: string }[];
  synonyms: { id: number; content: string }[];
  createdAt: string;
}

async function getWord(id: string): Promise<WordData | null> {
  try {
    const res = await fetch(`http://localhost:8080/api/word/${id}`, { cache: 'no-store' });
    if (!res.ok) {
      console.error(`Error fetching word ${id}: Status ${res.status}`);
      return null;
    }
    return res.json();
  } catch (error) {
    console.error(`Exception while fetching word ${id}:`, error);
    return null;
  }
}

export default async function WordDetailsPage({ params }: WordDetailsProps) {
  const word = await getWord(params.id);

  if (!word) {
    notFound();
  }

  return (
    <main className="flex-1 flex flex-col items-center py-8 px-4 sm:py-12 sm:px-6">
      <Container maxWidth="md"> {/* Usando Container MUI para max-width e centralização */}
        <Card
          elevation={3}
          sx={{
            borderRadius: 3, // Bordas do card mais arredondadas
          }}
        >
          <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}> {/* Padding responsivo */}
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: 'primary.main', // Usando a cor primária do tema MUI
                mb: 3
              }}
            >
              {word.term}
            </Typography>

            <Box mb={3}>
              <Typography variant="h6" component="h2" fontWeight="medium" gutterBottom>
                Definição
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {word.definition}
              </Typography>
            </Box>

            <Box mb={3}>
              <Typography variant="subtitle1" fontWeight="medium" display="inline">
                Classe gramatical:
              </Typography>
              <Typography variant="body1" display="inline" color="text.secondary" ml={1}>
                {word.partOfSpeech}
              </Typography>
            </Box>

            {word.examples && word.examples.length > 0 && (
              <Box mb={3}>
                <Typography variant="h6" component="h2" fontWeight="medium" gutterBottom>
                  Exemplos
                </Typography>
                <List sx={{ pl: 0 }}> {/* Removido padding padrão da lista */}
                  {word.examples.map((ex) => (
                    <ListItem key={ex.id} sx={{ pl: 2, display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' }}>
                      <Typography variant="body1" component="span" color="text.secondary"> {/* Usar body1 para exemplos */}
                        {ex.content}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}

            {word.synonyms && word.synonyms.length > 0 && (
              <Box mb={3}>
                <Typography variant="h6" component="h2" fontWeight="medium" gutterBottom>
                  Sinônimos
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {word.synonyms.map((s) => (
                    <Chip
                      key={s.id}
                      label={s.content}
                      // color="primary" // Usa a cor primária do tema
                      sx={{
                        backgroundColor: '#3B82F6', // Azul (Tailwind blue-500), como sugerido antes
                        color: 'white',
                        '&:hover': { backgroundColor: '#2563EB' }
                      }}
                      size="medium" // Um pouco maior que 'small'
                      clickable // Adiciona feedback visual se for clicável
                      // onClick={() => console.log(`Clicked ${s.content}`)} // Exemplo de ação
                    />
                  ))}
                </Stack>
              </Box>
            )}

            <Divider sx={{ my: 3 }} />

            <Typography variant="caption" color="text.disabled">
              Adicionada em: {new Date(word.createdAt).toLocaleDateString('pt-BR')} {/* pt-BR para formato de data */}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </main>
  );
}