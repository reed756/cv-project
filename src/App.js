import Heading from './components/Heading';
import './styles/App.css';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';
import Template from './components/Template';

function App() {
    return (
      <div className="App">
        <Heading />
        <div className="content">
          <div className="forms">
            <General />
            <Education />
            <Work />
          </div>
          <div className="preview">
            <Template />
          </div>
        </div>
      </div>
    );
}

export default App;