import './App.css';
import Input from './Components/Input';

function App() {
  return (
    <div className="App">
      <div className="grid three-column">
        <Input name={`<Input />`}/>
        <Input name={`&:hover`} state="hover"/>
        <Input name={`&:focus`} state="focus"/>
        <Input name={`<Input error />`} error="true"/>
        <Input name={`&:hover`} state="hover"/>
        <Input name={`&:focus`} error="true" state="focus"/>
        <Input name={`<Input disabled /`} disabled="true"/>
      </div>
      <div className="grid two-column">
        <Input name={`<Input helperText="Some interesting text"/>`} helperText="Some interesting text"/>
        <Input name={`<Input helperText="Some interesting text" error/>`} helperText="Some interesting text" error="true"/>

        <Input name={`<Input startIcon="lock" />`} startIcon="lock"/>
        <Input name={`<Input endIcon"lock" />`} endIcon="lock"/>

        <Input name={`<Input startIcon="phoneIcon" />`} startIcon="phoneIcon"/>
        <Input name={`<Input endIcon"phoneIcon" />`} endIcon="phoneIcon"/>

        <Input name={`<Input startIcon="contacts" />`} startIcon="contacts"/>
        <Input name={`<Input endIcon"contacts" />`} endIcon="contacts"/>

        <Input name={`<Input startIcon="location" />`} startIcon="location"/>
        <Input name={`<Input endIcon"location" />`} endIcon="location"/>

        <Input name={`<Input startIcon="bookmark" />`} startIcon="bookmark"/>
        <Input name={`<Input endIcon"bookmark" />`} endIcon="bookmark"/>
        
        <Input name={`<Input value="Text" />`} value="Text"/>
      </div>
      <div className="grid two-column">
        <Input name={`<Input size="sm" />`} size="sm"/>
        <Input name={`<Input size="md" />`} size="md"/>
      </div>
      <div className="grid">
        <Input name={`<Input fullWidth />`} fullWidth={true}/>
      </div>
      <div className="grid">
        <Input name={`<Input multiline row="4" />`} multiline={true} row="4"/>
      </div>
    </div>
  );
}

export default App;
