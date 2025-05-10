// src/app/contato/page.tsx

"use client";

import { useState, FormEvent } from 'react';
import { Container, Typography, Paper, Box, TextField, Button, CircularProgress, Alert, Stack, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import axios, { AxiosError } from 'axios'; // Importar Axios e AxiosError

// Interface para o estado dos erros de validação
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors>({}); // Estado para erros de validação

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpa o erro do campo específico ao digitar
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Função de validação
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) {
      errors.name = 'O nome é obrigatório.';
    }
    if (!formData.email.trim()) {
      errors.email = 'O email é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'O formato do email é inválido.';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'O assunto é obrigatório.';
    }
    if (!formData.message.trim()) {
      errors.message = 'A mensagem é obrigatória.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'A mensagem deve ter pelo menos 10 caracteres.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Retorna true se não houver erros
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null); // Limpa status anterior

    if (!validateForm()) { // Executa a validação
      return; // Interrompe o envio se houver erros
    }

    setIsSubmitting(true);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

    try {
      const response = await axios.post(`${apiUrl}/api/contact/send`, formData);

      // Axios lança um erro para status codes não-2xx por padrão,
      // então não precisamos checar response.ok como no fetch.
      // A resposta de sucesso da sua API (se houver) estará em response.data

      setSubmitStatus({ type: 'success', message: response.data || 'Mensagem enviada com sucesso! Agradeço o contato e responderei assim que possível.' });
      setFormData({ name: '', email: '', subject: '', message: '' }); // Limpa o formulário
      setFormErrors({}); // Limpa os erros de validação
    } catch (error: any) {
      let errorMessage = 'Ops! Algo deu errado ao tentar enviar sua mensagem. Por favor, tente novamente ou use um dos links abaixo.';
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.data) {
          // Se a API retornar uma mensagem de erro no corpo (como string ou objeto com 'message')
          if (typeof axiosError.response.data === 'string') {
            errorMessage = axiosError.response.data;
          } else if (typeof axiosError.response.data === 'object' && (axiosError.response.data as any).message) {
            errorMessage = (axiosError.response.data as any).message;
          } else {
            errorMessage = `Erro da API: ${axiosError.response.status} - ${axiosError.response.statusText}`;
          }
        } else if (axiosError.request) {
          errorMessage = 'Nenhuma resposta recebida da API. Verifique sua conexão ou o servidor.';
        } else {
          errorMessage = axiosError.message;
        }
      } else {
        errorMessage = error.message || errorMessage;
      }
      setSubmitStatus({ type: 'error', message: errorMessage });
      console.error("Erro no handleSubmit:", error);
    } finally {
      setIsSubmitting(false);
    }
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
            <Stack spacing={2}> {/* Ajustado spacing para 2 para acomodar os helperTexts */}
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
                error={!!formErrors.name} // Mostra estado de erro se houver erro para 'name'
                helperText={formErrors.name} // Exibe a mensagem de erro
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
                error={!!formErrors.email}
                helperText={formErrors.email}
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
                error={!!formErrors.subject}
                helperText={formErrors.subject}
              />
              <TextField
                required
                fullWidth
                id="message"
                label="Sua Mensagem"
                name="message"
                multiline
                rows={4} // Reduzido um pouco para melhor visual com helperText
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                variant="outlined"
                error={!!formErrors.message}
                helperText={formErrors.message}
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
                sx={{ py: 1.5, textTransform: 'none', fontWeight: 'bold', borderRadius: '50px', mt: 1 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </Stack>
          </Box>

          <Divider sx={{ my: 4, fontSize:'0.9rem', color:'text.disabled' }}>OU CONECTE-SE DIRETAMENTE</Divider> {/* Ajustado my para 4 */}

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
                href="mailto:lucastoledo358@gmail.com"
                sx={{ borderRadius: '50px', px:3, textTransform: 'none', flexGrow: 1, mb:1 }}
              >
                lucastoledo358@gmail.com
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<GitHubIcon />}
                href="https://github.com/sileo18/internetes-api"
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
                href="https://www.linkedin.com/in/lucas-antonio-toledo-sileo-b42593237/"
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