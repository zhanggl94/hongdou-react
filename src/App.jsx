import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './router';
import NotFound from './pages/NotFound'
import Signin from './pages/Signin'

function App() {
  return (
    <Router>
      <Switch>
        {renderRoutes(routes)}
        {/* <Route component={NotFound} /> */}
        {/* <Route component={NotFound} /> */}
        {/* <Route path="/signin" component={Signin} />
        <Route path="/notfound" component={NotFound} />
        <Redirect to="/notfound" /> */}
      </Switch>
    </Router>
  )
}

export default App
