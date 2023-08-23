import Button from './Component/button';
import './App.css';
import Signup from './Component/signup';

function App() {
  return (
    <div className="App">
      <h1> Hello World !!</h1>
      <main>
      <Signup />
      <Button buttonText="Button" />
      </main>
    </div>
  );
}

export default App;
