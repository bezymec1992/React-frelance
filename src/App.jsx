import LoginCheck from './components/LoginCheck/LoginCheck';
import TicketCheck from './components/TicketCheck/TicketCheck';
import './App.css';
import WordCheck from './components/WordCheck/WordCheck';
import ListShow from './components/ListShow/ListShow';
import ListData from './components/ListData/ListData';
import MenuGo from './components/MenuGo/MenuGo';
function App() {
  return (
    <div>
      <h1>Home task 2</h1>
      <div className="app">
        <MenuGo />
        <LoginCheck />
        <TicketCheck />
        <WordCheck />
        <ListShow />
        <ListData />
      </div>
    </div>
  );
}

export default App;
