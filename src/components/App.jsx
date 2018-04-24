import React from 'react';
import { Switch, Route } from 'react-router-dom';
import KegList from './KegList';
import Error404 from './Error404';
import Header from './Header';
import Footer from './Footer';
import ContactUs from './ContactUs';
import Carousel from './Carousel';
import NewKegControl from './NewKegControl';

function App(){
  return(
    <div style={backgroundStyling}>
      <Header/>
      <Route exact path='/' component={Carousel}/>
      <Switch>
        <Route path='/kegs' component={KegList}/>
        <Route path='/error' component={Error404} />
        <Route path='/contact' component={ContactUs}/>
        <Route path='/newkeg' component={NewKegControl}/>
      </Switch>
      <Footer/>
    </div>
  );
}

var backgroundStyling = {
  backgroundSize: 'cover'

}

export default App;
