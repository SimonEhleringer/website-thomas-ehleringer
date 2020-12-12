import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/index';
import Navbar from './parts/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTopButton></ScrollToTopButton>

      <Router>
        <Switch>
          <Route path='/' component={Index} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
