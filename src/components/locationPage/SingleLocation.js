import React from 'react';
import { RmImage } from '../UI/RmImage';
export const SingleLocation = ({ location }) => {
    return (
        <div className="location" >
            <div className="location__img-wrap" >
                <RmImage url={location.image} className="location__img" />
            </div>
            <div className="location__content">
                <h2 className="location__name">{location.name}</h2>
                <ul className="location__info-list">
                    <li className="location__info-item">
                        <span className="location__info-title">Type: </span>{location.type}
                    </li>
                    <li className="location__info-item">
                        <span className="location__info-title">Dimension: </span>{location.dimension}
                    </li>
                </ul>
            </div>

        </div >

    )
}
