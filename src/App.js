import ContenedorPadre from "./components/ContenedorPadre";
import ContenedorHijo from "./components/ContenedorHijo";

function App() {
  return (
    <div className="App">
      
      <ContenedorHijo>
        <p>Contenido Inicial Publicidad</p>
      </ContenedorHijo>

      <ContenedorPadre 
        nombre = 'Diego Arbelaez'
        nombrePagina = 'Tecnologia para Todos'
      />
        

      <ContenedorHijo>
        <ul>
          <li>Publicidad 1</li>
          <li>Publicidad 2</li>
          <li>Publicidad 3</li>
          <li>Publicidad 4</li>
        </ul>
      </ContenedorHijo>     

    </div>
  );
}

export default App;
