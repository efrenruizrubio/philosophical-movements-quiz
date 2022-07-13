import "./App.css";

import Movements from "./components/Movements";

const data = [
  {
    title: "Conceptos",
    items: [
      "Este es el concepto 1",
      "Este es el concepto 2",
      /* "Este es el concepto 3",
      "Este es el concepto 4",
      "Este es el concepto 5",
      "Este es el concepto 6", */
    ],
  },
  {
    title: "Imágenes",
    items: [
      "Esta es la imagen 1",
      "Esta es la imagen 2",
      /* "Esta es la imagen 3",
      "Esta es la imagen 4",
      "Esta es la imagen 5",
      "Esta es la imagen 6", */
    ],
  },
];

const movements = [
  {
    title: "Corriente 1",
    items: ["1", "2", "3"],
  },
  { title: "Corriente 2", items: ["1", "2", "3"] },
  { title: "Corriente 3", items: ["1", "2", "3"] },
  { title: "Corriente 4", items: ["1", "2", "3"] },
  { title: "Corriente 5", items: ["1", "2", "3"] },
  { title: "Corriente 6", items: ["1", "2", "3"] },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Movements data={data} movements={movements} />
      </header>
    </div>
  );
}

export default App;
