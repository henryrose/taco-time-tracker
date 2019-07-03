import React from 'react';

import locations from './data/locations';

function LocationList() {
  const locationsEls = locations.map( location => <li>{location.locationName} </li>)
  return(
    <div className="location-list">
      <ul>
      {locationsEls}
      </ul>
      <p>There are {locations.length} available locations.</p>
    </div>
  )
}

export default LocationList;
