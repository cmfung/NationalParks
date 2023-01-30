// import logo from './logo.svg';
import NavBar from './navBar';
import Filter from './filter'
import CardContainer from './parkCardContainer'
import './App.css';
import { ChakraProvider, Flex } from '@chakra-ui/react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChakraProvider>
          <NavBar />
          <Filter />
          <CardContainer />
        </ChakraProvider>
      </header>
    </div>
  );
}

export default App;
