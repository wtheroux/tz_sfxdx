import React from 'react'; 
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter basename='/exaccview/'>
          <Switch>
            <Route exact path='/' component={App}/>
          </Switch>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);