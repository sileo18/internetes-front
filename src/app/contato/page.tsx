"use client";

import { useState, FormEvent } from 'react';
import { Container, Typography, Paper, Box, TextField, Button, CircularProgress, Alert, Stack, Divider, IconButton } from '@mui/material';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send'; // Para o botão de enviar

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', // Assunto pode ser útil para filtrar os tipos de contato
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // --- INÍCIO DA LÓGICA DE ENVIO DO FORMULÁRIO (NECESSITA IMPLEMENTAÇÃO REAL) ---
    // Exemplo: usando uma Server Action ou fetch para um endpoint de API
    // Substitua esta simulação pela sua lógica real de envio de email.
    try {
      // Simulação de envio:
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Dados do formulário para envio:', formData);
      // Suponha que o envio foi bem-sucedido:
      setSubmitStatus({ type: 'success', message: 'Mensagem enviada com sucesso! Agradeço o contato e responderei assim que possível. (Simulação)' });
      setFormData({ name: '', email: '', subject: '', message: '' }); // Limpa o formulário
    } catch (error: any) {
      setSubmitStatus({ type: 'error', message: error.message || 'Ops! Algo deu errado ao tentar enviar sua mensagem. Por favor, tente novamente ou use um dos links abaixo.' });
    } finally {
      setIsSubmitting(false);
    }
    // --- FIM DA LÓGICA DE ENVIO DO FORMULÁRIO ---
  };

  return (
    <main className="flex-1 flex flex-col items-center py-8 px-4 sm:py-12 sm:px-6">
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, borderRadius: 3 }}>
          <Typography
            variant="h3"
            component="h1"
            textAlign="center"
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }}
          >
            Vamos Conversar!
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph textAlign="center" sx={{ mb: 4 }}>
            Sua opinião é super importante! Se você tem alguma sugestão de palavra, feedback sobre o site,
            uma ideia brilhante, quer reportar um bug, ou até mesmo se é um recrutador com uma oportunidade (quem sabe?! 😉),
            adoraria ouvir você.
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Stack spacing={3}>
              <TextField
                required
                fullWidth
                id="name"
                label="Seu Nome"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                id="email"
                label="Seu Email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                id="subject"
                label="Assunto (Ex: Sugestão, Feedback, Oportunidade, etc.)"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                id="message"
                label="Sua Mensagem"
                name="message"
                multiline
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                variant="outlined"
              />
              {submitStatus && (
                <Alert severity={submitStatus.type} sx={{ mt: 1, mb:1 }}>
                  {submitStatus.message}
                </Alert>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                sx={{ py: 1.5, textTransform: 'none', fontWeight: 'bold', borderRadius: '50px' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </Stack>
          </Box>

          <Divider sx={{ my: 5, fontSize:'0.9rem', color:'text.disabled' }}>OU CONECTE-SE DIRETAMENTE</Divider>

          <Box textAlign="center">
            <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
              Você também pode me encontrar ou enviar um email direto através dos links abaixo.
              Agradeço desde já pelo seu contato e farei o possível para responder rapidinho!
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
              <Button
                variant="outlined"
                color="primary"
                startIcon={<EmailIcon />}
                href="lucastoledo358@gmail.com" // SUBSTITUA PELO SEU EMAIL
                sx={{ borderRadius: '50px', px:3, textTransform: 'none', flexGrow: 1, mb:1 }}
              >
                lucastoledo358@gmail.com
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<GitHubIcon />}
                href="https://github.com/sileo18/internetes-api" // SUBSTITUA PELO LINK CORRETO DO SEU PROJETO NO GITHUB
                target="_blank"
                rel="noopener noreferrer"
                sx={{ borderRadius: '50px', px:3, textTransform: 'none', flexGrow: 1, mb:1 }}
              >
                GitHub do Projeto
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/lucas-antonio-toledo-sileo-b42593237/" // SUBSTITUA PELO SEU LINKEDIN
                target="_blank"
                rel="noopener noreferrer"
                sx={{ borderRadius: '50px', px:3, textTransform: 'none', flexGrow: 1, mb:1 }}
              >
                Meu LinkedIn
              </Button>
            </Stack>
          </Box>

        </Paper>
      </Container>
    </main>
  );
}