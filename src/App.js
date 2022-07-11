import "./App.css";

import Movements from "./components/Movements";

const data = [
  {
    title: "Conceptos",
    items: [
      "Este es el concepto 1",
      "Este es el concepto 2",
      "Este es el concepto 3",
      "Este es el concepto 4",
      "Este es el concepto 5",
      "Este es el concepto 6",
    ],
  },
  {
    title: "Imágenes",
    items: [
      "Esta es la imagen 1",
      "Esta es la imagen 2",
      "Esta es la imagen 3",
      "Esta es la imagen 4",
      "Esta es la imagen 5",
      "Esta es la imagen 6",
    ],
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Movements data={data} />
      </header>
    </div>
  );
}

export default App;
