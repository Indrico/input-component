import './App.css';
import Input from './Components/Input';

function App() {
  return (
    <div className="App">
      <div className="three-column">
        <Input name={`<Input />`}/>
        <Input name={`&:hover`} state="hover"/>
        <Input name={`&:focus`} state="focus"/>
        <Input name={`<Input error />`} error="true"/>
        <Input name={`&:hover`} state="hover"/>
        <Input name={`&:focus`} error="true" state="focus"/>
      </div>
    </div>
  );
}

export default App;
