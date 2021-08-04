import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BotaoTeste nome="teste" />
      
    </div>
  );
}

function BotaoTeste (props) {
  return (
  <button>{props.nome}</button>  
  )
}

export default App;
