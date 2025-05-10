import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SearchResult {
  id: string; // Ajustei para string, já que é usado como key e no href
  term: string;
  definition: string;
  partOfSpeech: string;
  // Se 'example' e 'synonyms' vêm como listas de objetos, ajuste as interfaces
  // Se forem listas de strings como no seu DTO original, está ok.
  // examples: { id: number; content: string }[]; // Exemplo de como seria se fossem objetos
  // synonyms: { id: number; content: string }[]; // Exemplo
  examples: string[]; // Mantendo como string[] conforme o SearchResult original
  synonyms: string[]; // Mantendo como string[] conforme o SearchResult original
}

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false); // Opcional: para feedback de carregamento
  const [error, setError] = useState<string | null>(null); // Opcional: para feedback de erro

  useEffect(() => {
    const fetchData = async () => {
      if (query.trim() === '') {
        setResults([]);
        setError(null);
        return;
      }

      const MIN_QUERY_LENGTH = 2; // Defina o mínimo desejado
      
      if (query.trim().length < MIN_QUERY_LENGTH) {
        setResults([]);
        setError(null); // Limpa erro se a query for muito curta
        // Poderia até definir uma mensagem específica: setError("Digite pelo menos X caracteres.");
        setIsLoading(false); // Garante que o loading não fique ativo
        return;
      }

      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:8080/api/word/search?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        const data: SearchResult[] = await response.json();
        setResults(data);
      } catch (err: any) {
        console.error('Erro ao buscar dados:', err);
        setError(err.message || 'Falha ao buscar resultados.');
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    // Debounce: espera 300ms após o usuário parar de digitar para fazer a busca
    const delayDebounceFn = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(delayDebounceFn); // Limpa o timeout se o query mudar antes de 300ms
  }, [query]);

  return (
    <div className="w-full max-w-md mx-auto relative"> {/* Adicionado relative para posicionar a lista se necessário */}
      <input
        type="text"
        placeholder="Não sabe o que significa? Escreva aqui!"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-3 border border-[#E0E0E0] rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] text-base transition-shadow"
      // Adicionei um shadow-sm e um pouco mais de estilo no focus
      />


      {isLoading && <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">Carregando...</div>}


      {/* A lista de resultados agora tem uma altura máxima e overflow-y: auto */}
      {query.trim() !== '' && !isLoading && !error && results.length > 0 && (
        <ul
          className="
            mt-2 bg-white border border-gray-200 rounded-md shadow-lg
            overflow-y-auto  /* Adiciona barra de rolagem vertical quando necessário */
            max-h-72         /* Define uma altura máxima. Ajuste este valor conforme necessário para ~4 itens. */
                            /* A altura exata para 4 itens dependerá do padding e line-height dos <li> */
                            /* Você pode calcular: 4 * (altura de um <li> + espaçamento) */
                            /* Ex: se um <li> tem ~50px de altura total, max-h-52 (208px) ou max-h-56 (224px) pode ser bom */
                            /* Use o DevTools para ajustar a altura ideal para 4 itens visíveis. */
          "
          style={{ maxHeight: 'calc(4 * (2.5rem + 1px + 1px))' }} /* Exemplo mais preciso: 4 * (py-2 + borda) */
        /* 2.5rem (40px) é a altura aproximada de um py-2 com texto. */
        /* Ajuste 2.5rem conforme a altura real do seu <li> */
        >
          {results.map((item) => (
            <li key={item.id} className="border-b border-gray-100 last:border-b-0"> {/* Borda entre itens */}
              <Link
                href={`/word/${item.id}`}
                className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-150 focus:outline-none focus:bg-purple-100"
              >
                <strong className="font-semibold text-purple-700">{item.term}</strong>:
                <span className="ml-1 text-sm text-gray-600 line-clamp-2"> {/* Limita a definição a 2 linhas */}
                  {item.definition}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Mensagem se não houver resultados (e não estiver carregando/com erro) */}
      {query.trim() !== '' && !isLoading && !error && results.length === 0 && (
        <div className="mt-2 px-4 py-3 bg-white border border-gray-200 rounded-md shadow-lg text-gray-500 text-sm">
          Nenhum resultado encontrado para "{query}".
        </div>
      )}

      {/* Mensagem de erro */}
      {error && (
        <div className="mt-2 px-4 py-3 bg-red-50 border border-red-200 text-red-700 rounded-md shadow-lg text-sm">
          {error}
        </div>
      )}
    </div>
  );
}

export default SearchComponent;