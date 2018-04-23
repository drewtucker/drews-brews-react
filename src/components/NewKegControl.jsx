import React from 'react';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({formVisibleOnPage: true});
  }

  render() {
    return (
      <div>
        <div className='container'>
          <p>NewKegControl works!</p>
          <p><span onClick={this.handleClick}>Click</span> me to change me state!</p>
        </div>
      </div>
    );
  }
}

export default NewKegControl;
