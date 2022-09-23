
import './App.css';
import Header from './components/header';
import Perfil from './components/perfil';
import Publications from './components/publications';
import Story from './components/story';
import Suggestions from './components/suggestions';
import { getData } from './components/fetch/apiDioses';


function App() {

  getData()

  return (
   <div className='container'>
    <Header/>
    <Story/>
    <Perfil/>
    <Publications/>
    <Suggestions/>

   </div>
  );
}

export default App;
