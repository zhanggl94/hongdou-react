import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { commonRoutes } from './router';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {renderRoutes(commonRoutes)}
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
