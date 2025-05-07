import { notFound } from 'next/navigation';
import { Card, CardContent, Typography, List, ListItem, Chip, Divider } from '@mui/material';

// ... (interfaces WordDetailsProps, WordData e função getWord permanecem as mesmas)
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
    // Para desenvolvimento, 'no-store' é bom. Considere 'revalidate' para produção.
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
    // O layout global (header, footer, bg) virá do RootLayout.
    // Este 'main' pode ser uma 'div' ou 'main' dependendo da semântica desejada
    // para esta seção específica da página. 'main' é geralmente usado uma vez por página.
    // Como o RootLayout não tem um <main> explícito envolvendo 'children', podemos usar <main> aqui.
    <main className="flex-1 flex flex-col items-center py-12 px-6"> {/* Adicionado flex-1 e centralização */}
      <div className="max-w-2xl w-full"> {/* w-full para garantir que max-w-2xl funcione bem dentro do flex container */}
        <Card sx={{ bgcolor: 'background.paper', color: 'text.primary' }}> {/* O MUI pode herdar cores do tema */}
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              {word.term}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Definição:</strong> {word.definition}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              <strong>Classe gramatical:</strong> {word.partOfSpeech}
            </Typography>

            <div className="mb-4">
              <Typography variant="h6" component="div">
                Exemplos:
              </Typography>
              {word.examples && word.examples.length > 0 ? (
                <List>
                  {word.examples.map((ex) => (
                    <ListItem key={ex.id}>
                      <Typography variant="body2">{ex.content}</Typography>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body2">Nenhum exemplo disponível.</Typography>
              )}
            </div>

            <div>
              <Typography variant="h6" component="div">
                Sinônimos:
              </Typography>
              {word.synonyms && word.synonyms.length > 0 ? (
                <List sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, paddingLeft: 0 }}> {/* paddingLeft:0 para alinhar melhor */}
                  {word.synonyms.map((s) => (
                    <ListItem key={s.id} sx={{ width: 'auto', padding: 0 }}>
                      <Chip label={s.content} color="primary" size="small" />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body2">Nenhum sinônimo disponível.</Typography>
              )}
            </div>

            <Divider sx={{ marginY: 2 }} />

            <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
              Adicionada em: {new Date(word.createdAt).toLocaleDateString()}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}