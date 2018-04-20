import React from 'react';
import { Switch, Route } from 'react-router-dom';
import KegList from './KegList';
import Error404 from './Error404';
import Header from './Header';
import backgroundimg from '../assets/img/drews-brewsbg.jpg';

function App(){
  return(
    <div style={backgroundStyling}>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList}/>
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

var backgroundStyling = {
  backgroundImage: `url(${backgroundimg})`,
  backgroundSize: 'cover'

}

export default App;
