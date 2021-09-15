import './App.css';
import Developer from './components/Developer';

function App() {
  
  const card1 = {nome: "Bruno", idade: 28, pais: "Brasil",}
  const card2 = {nome: "Filipe", idade: 28, pais: "Brasil"}
  const card3 = {nome: "Tiago", idade: 37, pais: "Brasil"}

  return (

    <div className="App">
      <div className="App-header">
        <Developer name={card1.nome} age={card1.idade} country={card1.pais}/>
        <Developer name={card2.nome} age={card2.idade} country={card2.pais}/>
        <Developer name={card3.nome} age={card3.idade} country={card3.pais}/>
        
      </div>
    </div>
  );
}

export default App; 