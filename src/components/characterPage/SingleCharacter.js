import React, { } from 'react';
import { RmImage } from '../UI/RmImage';
export const SingleCharacter = ({ character }) => {
    return (
        <div className="character" >
            <div className="character__img-wrap" >
                <RmImage url={character.image} className="character__img" />
            </div>
            <div className="character__content">
                <h2 className="character__name">{character.name}</h2>
                <ul className="character__info-list">
                    <li className="character__info-item">
                        <span className="character__info-title">Status:</span>{character.status}
                    </li>
                    <li className="character__info-item">
                        <span className="character__info-title">Species:</span>{character.species}
                    </li>
                    <li className="character__info-item">
                        <span className="character__info-title">Gender:</span>{character.gender}
                    </li>
                </ul>
            </div>
        </div >

    )
}
