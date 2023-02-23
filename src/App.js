import './App.css';
import {CustomButton, HelloWorld, InputBox} from 'sb-components-take-two';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <InputBox />
        <CustomButton variant='contained' innerText={'Hey Hey Hey'} onClick={() => alert('It works!')} />
    </div>
  );
}

export default App;
