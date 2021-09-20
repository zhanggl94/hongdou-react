import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { commonRoutes } from './router';

function App() {
  return (
    <Router>
      <Switch>
        {renderRoutes(commonRoutes)}
      </Switch>
    </Router>
  )
}

export default App
