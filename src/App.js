import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Characters } from './pages/characters/Characters';
import { Episodes } from './pages/episodes/Episodes';
import { Locations } from './pages/locations/Locations';
import { Watch } from './pages/watchList/Watch';
import { Navbar } from './components/Navbar'
import './components/style.scss'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path={'/'} exact component={Characters} />
          <Route path={'/episodes'} component={Episodes} />
          <Route path={'/locations'} component={Locations} />

          <Route path={'/watch'} component={Watch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
