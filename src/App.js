import './App.css';
import { BrowserRouter as BRouter, Route, Link } from "react-router-dom";
import Alpes from './Componentes/Alpes';
import Polinesia from './Componentes/Polinesia';
import Muralla from './Componentes/Muralla';
import Egipto from './Componentes/Egipto';
import Colombia from './Componentes/Colombia';
import Bolivia from './Componentes/Bolivia';
import Navegacion from './Componentes/Navegacion';

function App() {
  return (

    <BRouter>
         
        <div className="container">
          <h1 className="text-center mt-3 mb-3 text-white">Galeria</h1>
        </div>
        
        <Route path="/Alpes" component={Alpes} />
        <Route path="/Bolivia" component={Bolivia} />
        <Route path="/Colombia" component={Colombia} />
        <Route path="/Egipto" component={Egipto} />
        <Route path="/Muralla" component={Muralla} />
        <Route path="/Polinesia" component={Polinesia} />

        <Navegacion />

    </BRouter>

  );
}

export default App;
