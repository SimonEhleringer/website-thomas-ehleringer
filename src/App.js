import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/index';
import Navbar from './parts/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Switch>
          <Route path='/' component={Index} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
