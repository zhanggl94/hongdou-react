import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './router';

function App() {
  return (
      <Router>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </Router>
  )
}

export default App
