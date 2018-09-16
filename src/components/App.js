import React                    from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header                   from './Header';
import Dashboard                from './Dashboard';

const App = () => (
  <div className="container">
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Dashboard} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
