import './App.css';
import OverView from './pages/OverView';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={< Home />}/>
        <Route path="/overView" element={< OverView />}/>
      </Routes>
    </main>
  );
}

export default App;
