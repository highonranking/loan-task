import logo from './logo.svg';
import './App.css';
import Claims from './components/Claims';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className="App">
      <header className="container mx-auto flex">
        <SideNav />
        <div className="flex-1 p-12"> 
          <Claims />
        </div>
      </header>
    </div>
  );
}

export default App;
