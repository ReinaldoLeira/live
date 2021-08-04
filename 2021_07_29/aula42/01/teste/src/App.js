import logo from './logo.svg';
import './App.css';

function App() {
  const nomes = ['Reinaldo','Emannuelle', 'Doido', 'Excluido', 'Teste']
  const listaNomes = nomes.filter(n => n != 'Excluido').map(n => <li>{n}</li> )
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {listaNomes}
        </ul>
      </header>
    </div>
  );
}

export default App;
