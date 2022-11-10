import React, { useState } from 'react'
import Image from '../UI/Image'
import Popup from '../UI/Popup'
import CharacterPopup from './CharacterPopup'

export const SingleCharacter = ({ character }) => {
    const [window, setWindow] = useState(false)
    const openPopup = () => {
        setWindow(true)
    }

    return (
        <li className="list-group-item character-item" onClick={openPopup}>
            <div className="character">
                <div className="character__img-wrap">
                    <Image url={character.image} className="character__img" />
                </div>
                <div className="character__content">
                    <h2 className="character__name">{character.name}</h2>
                    <ul className="character__info-list">
                        <li className="character__info-item">
                            <span className="character__info-title">
                                <i class="fas fa-paw"></i>{' '}
                            </span>
                            {character.species}
                        </li>
                        <li className="character__info-item">
                            <span className="character__info-title">
                                <i class="fas fa-venus-mars"></i>{' '}
                            </span>
                            {character.gender}
                        </li>
                        <li className="character__info-item">
                            <span className="character__info-title">
                                <i class="far fa-address-card"></i>{' '}
                            </span>
                            {character.status}
                        </li>
                    </ul>
                </div>
            </div>
            <Popup
                header={character.name}
                character={character}
                window={window}
                setWindow={setWindow}
            >
                <CharacterPopup character={character} />
            </Popup>
        </li>
    )
}
