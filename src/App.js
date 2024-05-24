import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept.js";
import Examples from "./components/Examples.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcept />
        <Examples />
      </main>
    </div>
  );
}

export default App;
