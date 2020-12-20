import './App.css';

import Launches from './components/Launches';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="text-center">
          <h1 className="my-3">SpaceX</h1>
          <p className="lead">Welcome to our SpaceX Api application!</p>
        </div>
        <Launches />
      </div>
    </div>
  );
}

export default App;
