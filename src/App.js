import './App.css';
import ApiFetching from './Components/ApiFetching';
import ComponentCycle from './Components/ComponentCycle';
import CreateComp from './Components/CreateComp';
import FormComp from './Components/FormComp';
import ContextComp from './Components/context/ContextComp';

function App() {
  return (
    <div>
     <CreateComp />
     <FormComp />
     <ApiFetching />
     <ComponentCycle />
     <ContextComp />
    </div>
  );
}

export default App;
