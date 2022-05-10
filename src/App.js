import './App.css';

import PersonCard from './components/PersonCard';

function App()
{
  return(
    <><div className="App">
        <PersonCard lastName={"Doe"} firstName={"Jane"} Age={"45"} hairColor={"Black"} />
      </div>

      <div className="App">
        <PersonCard lastName={"Smith"} firstName={"John"} Age={"88"} hairColor={"Brown"} />
      </div>
      
      <div className="App">
        <PersonCard lastName={"Fillmore"} firstName={"Millard"} Age={"50"} hairColor={"Brown"} />
      </div>

      <div className="App">
        <PersonCard lastName={"Smith"} firstName={"Maria"} Age={"62"} hairColor={"Brown"} />
      </div>
    </>
  );
}

export default App;
