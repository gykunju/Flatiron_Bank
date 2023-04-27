import './App.css';
import TransactionManager from './components/TransactionManager';

//The app function is to return the components to the page
function App() {
  return (
    <div className="App">
      <div>
        <h1>Flatiron Bank</h1>
      </div>
      <TransactionManager />
    </div>
  );
}

export default App;
