
import './App.css';
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
<Weather defaultcity="Entebbe"/>
       <footer className='mt-3'>
        <p> This Application was coded by Namirimu Carol and its
          <a href='https://github.com/carolnamirimu/react-weather-application'> open source at Github </a>.
        </p>
       </footer>
      </header>
      </div>
    </div>
  );
}

export default App;
