import React from 'react';
import { SingleLocation } from './SingleLocation';
export const LocationsList = ({ locations }) => {
    console.log(locations);
    if (locations === undefined) {
        return (<div>Loading...</div>)
    } else {
        return (<div className="row mb-4 mx-auto">

            {locations.map(item => (
                <div className="col-12 col-md-6" key={item.key}>
                    <SingleLocation location={item} />
                </div>
            ))}
        </div >)
    }
}
