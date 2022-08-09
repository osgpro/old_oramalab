import { HashRouter as Router, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <Router>
        <Route path="/homepage" component={HomePage} />
      </Router> */}
    </div>
  );
}

export default App;
