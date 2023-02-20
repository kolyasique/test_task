
import './App.css';
import ScriptList from './components/Lists/ScriptList';
import StyleList from './components/Lists/StyleList';
import ParseForm from './components/ParseForm';

function App() {
  return (
    <div className="App">
    <ParseForm />
    <div className='lists'>
      <div className='listPart'>
      <ScriptList />
      </div>
      <div className='listPart'>
      <StyleList />
      </div>
    </div>
    </div>
  );
}

export default App;
