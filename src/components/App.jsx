import React from 'react';
import { Switch, Route } from 'react-router-dom';
import KegList from './KegList';
import Error404 from './Error404';
import Header from './Header';
import Footer from './Footer';
import Admin from './Admin';
import KegDetail from './KegDetail';
import ContactUs from './ContactUs';
import Carousel from './Carousel';
import AboutUs from './AboutUs';
import NewKegControl from './NewKegControl';
import { v4 } from 'uuid';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {},
      selectedKeg: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }
  render(){

    return(
      <div style={backgroundStyling}>
        <style global jsx>{`
            .container-fluid {
              padding: 0px
            }
            `}</style>
        <Header/>
        <Route exact path='/' component={Carousel}/>
        <div className='row'>
          <Route exact path='/' component={AboutUs}/>
        </div>
        <Switch>
          <Route path='/kegs' render={()=><KegList kegList={this.state.masterKegList}/>}/>
          <Route path='/error' component={Error404} />
          <Route path='/contact' component={ContactUs}/>
          <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList}/>} />
          <Route path='/admin' render={(props)=><Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname} onKegSelection={this.handleChangingSelectedKeg} selectedKeg={this.state.selectedKeg}/>} />
        </Switch>

        <Footer/>
      </div>
    );
  }

handleAddingNewKegToList(newKeg){
  var newKegId = v4()
  var newMasterKegList = Object.assign({}, this.state.masterKegList, {
    [newKegId]: newKeg
  });
  newMasterKegList[newKegId].formattedTimeAdded = newMasterKegList[newKegId].timeAdded.fromNow(true);
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
  let newMasterKegList = Object.assign({}, this.state.masterKegList);
  Object.keys(newMasterKegList).forEach(kegId => {
    newMasterKegList[kegId].formattedTimeAdded = (newMasterKegList[kegId].timeAdded).fromNow(true);
  });
  this.setState({masterKegList: newMasterKegList});
}

handleChangingSelectedKeg(kegId){
  this.setState({selectedKeg: kegId});
}

}

var backgroundStyling = {
  backgroundSize: 'cover'

};

export default App;
