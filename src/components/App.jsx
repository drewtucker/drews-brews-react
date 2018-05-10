import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
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
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class App extends React.Component{


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
          <Route path='/kegs' render={()=><KegList kegList={this.props.masterKegList}/>}/>
          <Route path='/error' component={Error404} />
          <Route path='/contact' component={ContactUs}/>
          <Route path='/newkeg' render={()=><NewKegControl/>} />
          <Route path='/admin' render={(props)=><Admin
            currentRouterPath={props.location.pathname}/>} />
        </Switch>

        <Footer/>
      </div>
    );
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
  const { dispatch } = this.props;
  Object.keys(this.props.masterKegList).map(kegId => {
    const keg = this.props.masterKegList[kegId];
    const newFormattedTimeAdded = keg.timeAdded.fromNow(true);
    const action = {
      type: 'UPDATE_TIME',
      id: kegId,
      formattedTimeAdded: newFormattedTimeAdded
    };
    dispatch(action);
  });
}


}

//APP GENERAL STYLING
var backgroundStyling = {
  backgroundSize: 'cover'
};

//MAP STATE TO PROPS
const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList
  }
}

//APP PROPTYPES
App.propTypes = {
  masterKegList: PropTypes.object
}

export default withRouter(connect(mapStateToProps)(App));
