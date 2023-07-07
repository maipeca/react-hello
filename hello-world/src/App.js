
import './App.css';
import HelloWorld from './components/Function-hello';
import Hello from './components/Class-hello';
import HelloWorl from './components/Prop-hello';
import ElloWorld from './components/state';


function App() {
  return (
    <div className="App">
      
      
     <HelloWorld/>
     <Hello/>
     <HelloWorl
     name= 'world'
     /> 
     <ElloWorld/>
     
      
    </div>
  );
}

export default App;
