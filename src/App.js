import logo from './logo.svg';
import './App.css';
import SummaryPage from './Pages/SummaryPage';
import OrderPage from './Pages/OrderPage';

function App() {
  return (
    <div style={{padding:"4rem"}}>
    <OrderPage/>
    <SummaryPage/>
    </div>
  );
}

export default App;
