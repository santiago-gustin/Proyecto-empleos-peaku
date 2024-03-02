import JobCards from './components/JobCards';
import Header from './components/Header';
import MenuLateral from './components/MenuLateral';
import './App.css';
import Searcher from './components/Searcher';

function App() {
  const programs = ['Power Bi','Power Apps','Microsoft 365'];
  const information = ['Genuine Digital School rrr','Remoto - Cualquier lugar','Confidencial','2 Vacante','2 day ago'];
  return (
    <div className="App">
      <Header />
      <MenuLateral />
      <Searcher />
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/>
      {/* <JobCards title='Coordinador de Tecnología Educativa' programs={programs} information={information}/> */}
    </div>
  );
}

export default App;
