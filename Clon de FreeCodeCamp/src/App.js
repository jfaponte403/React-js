import './App.css';
import Testimony from './components/Testimony';

function App() {
  return (
    <div className="App">
      <div className = "principal-container" >
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
        <Testimony
            nombre={"Mark Zucemberg"}
            pais={"Estados unidos"}
            imagen={"zuck"}
            cargo={"Ingeniero de software"}
            empresa={"Facebook"}
            testimonio={"Practicamente cree facebook en react asi que..."} />
        <Testimony
            nombre={"Elon Musk"}
            pais={"Estados unidos"}
            imagen={"musk"}
            cargo={"Tonny Stark"}
            empresa={"Space X, Tesla."}
            testimonio={"Cree un cohete que lit aterriza solo hahaha"} />
        <Testimony
            nombre={"Bill Gates"}
            pais={"Estados unidos"}
            imagen={"gates"}
            cargo={"Ingeniero de software"}
            empresa={"Microsoft"}
            testimonio={"Pagame la licencia del win ;v"} />
      </div>
    </div>
  );
}

export default App;
