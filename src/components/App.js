import React from 'react'
import '../styles/App.css';
// import { BrowserRouter as Router, Route,Link,Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Info from './Info';
import Blog from './Blog';
import Home from './Home';
const App = () => {

  return (
    <div id="main">


      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path='/blog' exact>
            <Blog />
          </Route>
          <Route path='/info' exact>
            <Info />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}


export default App;
