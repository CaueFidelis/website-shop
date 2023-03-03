import databaseJSON from './database/dbTeste.json';

interface CategoriasProps {
  id: number;
  nome: string;
}

interface ProdutosProps {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
  categoria_id: number;
}

function App() {
  const database = JSON.parse(JSON.stringify(databaseJSON));
  const categorias = database.categorias;
  const produtos = database.produtos;

  return (
    <div className="App">
      <h1>Teste</h1>
      <ul>
        {categorias.map((categoria: CategoriasProps) => (
          <li key={categoria.id}>{categoria.nome}</li>
        ))}
      </ul>
      <ul>
        {produtos.map((produto: ProdutosProps) => (
          <li key={produto.id}>
            <div>
              <img src={produto.foto} alt={`Imagem do ${produto.nome}`} />
              <h2>{produto.nome}</h2>
              <p>{produto.descricao}</p>
              <span>{produto.preco}</span>
              <button>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
