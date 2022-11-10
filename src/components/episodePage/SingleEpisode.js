import React from 'react'

const SingleEpisode = ({ item }) => (
    <div className="episode">
        <div className="episode__wrap">
            <h3>{item.name}</h3>
            <p className="episode__release">
                <i class="fas fa-tv"></i>
                {item.air_date}
            </p>
            <p className="episode__code">
                <i class="fas fa-list-ol"></i>
                <strong>{item.episode}</strong>
            </p>
        </div>
    </div>
)

export default SingleEpisode
