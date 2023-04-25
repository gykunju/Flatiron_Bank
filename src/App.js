import './App.css';
import DisplayContainer from './components/DisplayContainer';

//The app function is to return the components to the page
function App() {
  return (
    <div className="App">
      <div>
        <h1>Flatiron Bank</h1>
      </div>
      <DisplayContainer />
    </div>
  );
}

export default App;
