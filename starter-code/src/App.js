import React from 'react';
import BeerService from './services/BeerService';
import { Switch, Route, Redirect } from 'react-router-dom';

//components
import NavBar from './components/misc/NavBar';
import Home from './components/Home';
import Beers from './components/Beers';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';


const App = () => {
  console.log(BeerService)
  return(
    <div className="App">
      <NavBar />
    
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:beerId" component={BeerDetail} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        
        <Redirect to="/"/>
      </Switch>

    </div>
  )
}

export default App;