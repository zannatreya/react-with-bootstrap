import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import Cardgroup2 from './Components/Cardgroup2/Cardgroup2';

function App() {
  return (
    <div className="App">
      <Button variant="danger">my button</Button>
      <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Cardgroup2></Cardgroup2>
    </div>
  );
}

export default App;
