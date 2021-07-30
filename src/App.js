import Heading from './components/Heading';
import './styles/App.css';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';

function App() {
    return (
      <div className="App">
        <Heading />
        <General />
        <Education />
        <Work />
      </div>
    );
}

export default App;