import Accordion from "./Accordion";
import { accordionData } from "./content";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col h-screen place-content-center items-center">
        {accordionData.map(({ title, content, id }) => (
          <Accordion title={title} content={content} id={id}/>
        ))}
      </div>
    </div>
  );
}

export default App;
