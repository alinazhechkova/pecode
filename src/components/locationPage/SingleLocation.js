import React from 'react'

export const SingleLocation = ({ location }) => (
    <div className="location">
        <div className="location__wrap">
            <div className="location__content">
                <h2 className="location__name">{location.name}</h2>
                <ul className="location__info-list">
                    <li className="location__info-item">
                        <span className="location__info-title">
                            <i class="fas fa-globe-europe"></i>
                        </span>
                        {location.type}
                    </li>
                    <li className="location__info-item">
                        <span className="location__info-title">
                            <i class="fas fa-meteor"></i>
                        </span>
                        {location.dimension}
                    </li>
                </ul>
            </div>
        </div>
    </div>
)
