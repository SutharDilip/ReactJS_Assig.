import { React, createContext } from 'react';
import Routes from './Route/Routes';

function App() {
  const AuthContext = createContext()
  return (
    <Routes/>
  );
}

export default App;
