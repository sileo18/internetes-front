import { notFound } from 'next/navigation';
import { Card, CardContent, Typography, List, ListItem, Chip, Divider } from '@mui/material';
import { useEffect, useState } from 'react';

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
    const res = await fetch(`http://localhost:8080/api/word/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function WordDetailsPage({ params }: WordDetailsProps) {
  const [word, setWord] = useState<WordData | null>(null);

  useEffect(() => {
    const fetchWord = async () => {
      const fetchedWord = await getWord(params.id);
      if (fetchedWord) {
        setWord(fetchedWord);
      } else {
        notFound();
      }
    };
    fetchWord();
  }, [params.id]);

  if (!word) return null;

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <Card>
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
            <List>
              {word.examples.map((ex) => (
                <ListItem key={ex.id}>
                  <Typography variant="body2">{ex.content}</Typography>
                </ListItem>
              ))}
            </List>
          </div>

          <div>
            <Typography variant="h6" component="div">
              Sinônimos:
            </Typography>
            <List>
              {word.synonyms.map((s) => (
                <ListItem key={s.id}>
                  <Chip label={s.content} color="primary" size="small" />
                </ListItem>
              ))}
            </List>
          </div>

          <Divider sx={{ marginTop: 2 }} />

          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
            Adicionada em: {new Date(word.createdAt).toLocaleDateString()}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}