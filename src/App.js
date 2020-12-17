import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/index';
import Navbar from './parts/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './parts/Footer';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTopButton></ScrollToTopButton>

      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={'/'} component={Index} exact />
        </Switch>
      </Router>

      <Footer />
    </>
  );
}

export default App;
