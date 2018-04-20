import React from 'react';
import Keg from './Keg';
import { Panel } from 'react-bootstrap';

function KegList() {
  return(
    <div>
      <div className="container">
        <div className="col-md-6">
          <Panel style={ListStyling}>
          <h2>Beers on Tap:</h2>
          <hr/>
          {masterKegList.map((keg, index) =>
          <Keg
            name={keg.name}
            brewery={keg.brewery}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pints={keg.pints}
            key={index}/>
        )}
      </Panel>
        </div>
      </div>
    </div>
  );
}

//STYLING AND MOCK DATA BELOW

var ListStyling = {
  textAlign: 'center'
}

const masterKegList = [
  {
    name: "Wud Light",
    brewery: "WudBeiser",
    price: 5,
    alcoholContent: 4.5
  },
  {
    name: "Lagoonitas",
    brewery: "Dalmation Brewing Co.",
    price: 6,
    alcoholContent: 7
  },
  {
    name: "Filler Light",
    brewery: "Filler Brews",
    price: 3,
    alcoholContent: 4
  },
  {
    name: "Steve's Stout",
    brewery: "Steve Stevenson Brewery",
    price: 8,
    alcoholContent: 8
  }
]

export default KegList;
