import './App.css';
import { HashRouter , Route, Switch } from 'react-router-dom';
import { routesPage } from './routes';

function App() {
  let showPages = (routesPage) => {
    let rs = null;
    if (routesPage.length) {
      rs = routesPage.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        );
      })
    }
    return rs;
  }
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          {showPages(routesPage)}
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
