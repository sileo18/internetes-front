import { useState, useEffect } from 'react';

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchData = async () => {
      if (query.trim() === '') {
        setResults([]);
        return;
      }

      try {
        const response = await fetch(`http://localhost:8080/api/word/search?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setResults([]);
      }
    };

    // Configura o debounce com um atraso de 300ms
    const delayDebounceFn = setTimeout(() => {
      fetchData();
    }, 300);

    // Limpa o timeout anterior se o efeito for chamado novamente antes do tempo
    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Não sabe o que significa? Escreva aqui!"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-3 border border-[#ccc] rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] text-base"
      />

      {results.length > 0 && (
        <ul className="mt-4 bg-white border border-gray-200 rounded-md shadow">
          {results.map((item) => (
            <li key={item.id} className="px-4 py-2 hover:bg-gray-100">
              <strong>{item.term}</strong>: {item.definition}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchComponent;