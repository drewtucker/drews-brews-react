import React from 'react';
import { Switch, Route } from 'react-router-dom';
import KegList from './KegList';
import Error404 from './Error404';
import Header from './Header';
import Footer from './Footer';
import ContactUs from './ContactUs';
import Carousel from './Carousel';
import NewKegControl from './NewKegControl';
import Moment from 'moment';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }
  render(){

    return(
      <div style={backgroundStyling}>
        <Header/>
        <Route exact path='/' component={Carousel}/>
        <Switch>
          <Route path='/kegs' render={()=><KegList kegList={this.state.masterKegList}/>}/>
          <Route path='/error' component={Error404} />
          <Route path='/contact' component={ContactUs}/>
          <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList}/>} />
        </Switch>
        <Footer/>
      </div>
    );
  }

handleAddingNewKegToList(newKeg){
  var newMasterKegList = this.state.masterKegList.slice();
  newKeg.formattedTimeAdded = (newKeg.timeAdded).fromNow(true)
  newMasterKegList.push(newKeg);
  this.setState({masterKegList: newMasterKegList});
}

componentDidMount(){
  this.timeAddedUpdateTimer = setInterval(() =>
    this.updateKegElapsedWaitTime(),
    5000
  );
}

componentWillUnmount() {
  clearInterval(this.timeAddedUpdateTimer);
}

updateKegElapsedWaitTime() {
  let newMasterKegList = this.state.masterKegList.slice();
  newMasterKegList.forEach((keg) =>
    keg.formattedTimeAdded = (keg.timeAdded).fromNow(true)
  );
  this.setState({masterKegList: newMasterKegList})
}

}

var backgroundStyling = {
  backgroundSize: 'cover'

}

const masterKegList = [
  {
    name: 'Wud Light',
    brewery: 'WudBeiser',
    price: 5,
    alcoholContent: 4.5
  },
  {
    name: 'Lagoonitas',
    brewery: 'Dalmation Brewing Co.',
    price: 6,
    alcoholContent: 7
  },
  {
    name: 'Filler Light',
    brewery: 'Filler Brews',
    price: 3,
    alcoholContent: 4
  },
  {
    name: 'Steves Stout',
    brewery: 'Steve Stevenson Brewery',
    price: 8,
    alcoholContent: 8
  }
]

export default App;
