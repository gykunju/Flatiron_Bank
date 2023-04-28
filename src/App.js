import './App.css';
import TransactionManager from './components/TransactionManager';

//The app function is to return the components to the page
function App() {
  return (
    <div className="App">
      <div id='heading'>
        <h1>Flatiron Bank</h1>
        <h4>Where banking becomes hobby</h4>
      </div>
      <TransactionManager />
    </div>
  );
}

export default App;
