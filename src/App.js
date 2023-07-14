
import './App.css';
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
<Weather defaultcity="london"/>
       <footer className='mt-3'>
        <p> This App was coded by <a href='https://www.linkedin.com/in/carol-namirimu-50b660127/'target='blank'>Namirimu Carol</a> and its
          <a href='https://github.com/carolnamirimu/react-weather-application'target='blank'> open source at Github </a> and <a href='https://glittering-phoenix-d587dd.netlify.app/'target='blank'>hosted on netlify</a>.
        </p>
       </footer>
      </header>
      </div>
    </div>
  );
}

export default App;
