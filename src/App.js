import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TabSelection from './components/TabSelection/index.js';

function App() {
  return (
    <div className='appTheme appContainer'>
      <Navbar />
      <TabSelection />
    </div>
  );
}

export default App;
