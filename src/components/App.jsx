import React from 'react';
import { Switch, Route } from 'react-router-dom';
import KegList from './KegList';
import Error404 from './Error404';
import Header from './Header';
import Footer from './Footer';
import ContactUs from './ContactUs';
import backgroundimg from '../assets/img/drews-brewsbg.jpg';

function App(){
  return(
    <div style={backgroundStyling}>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList}/>
        <Route path='/error' component={Error404} />
        <Route path='/contact' component={ContactUs}/>
      </Switch>
      <Footer/>
    </div>
  );
}

var backgroundStyling = {
  backgroundImage: `url(${backgroundimg})`,
  backgroundSize: 'cover'

}

export default App;
