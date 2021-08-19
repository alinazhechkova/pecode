import React from 'react';
export const SingleEpisode = ({ item }) => {

    return (
        <div className="episode">
            <h3>{item.name}</h3>
            {item.air_date}
            <p><strong>{item.episode}</strong></p>
        </div>

    )
}
