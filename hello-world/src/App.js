import Button from './Component/button';
import './App.css';
import Signup from './Component/signup';

function App() {
  return (
    <div className="App">
      <h1> Hello World !!</h1>
      <Signup />
      <Button buttonText="Button" />
    </div>
  );
}

export default App;
