// import logo from './logo.svg';
import NavBar from './navBar';
import Filter from './filter'
import CardContainer from './parkCardContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Filter />
        <CardContainer />
      </header>
    </div>
  );
}

export default App;
