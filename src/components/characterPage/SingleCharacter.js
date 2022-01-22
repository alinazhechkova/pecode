import React, { useState } from "react";
import { RmImage } from "../UI/RmImage";
import { RmPopup } from "../UI/RmPopup";

export const SingleCharacter = ({ character }) => {
  const [window, setWindow] = useState(false);
  const openPopup = () => {
    setWindow(true);
  };

  const main = (
    <ul className="window__info">
      <li className="window__info-item">
        <span className="window__info-title">
          <i class="fas fa-street-view"></i>
        </span>
        {character.location.name}
      </li>
      <li className="window__info-item">
        <span className="window__info-title">
          <i class="fas fa-home"></i>
        </span>
        {character.origin.name}
      </li>
      <li className="window__info-item">
        <span className="window__info-title">
          <i class="far fa-address-card"></i>
        </span>
        {character.status}
      </li>
      <li className="window__info-item">
        <span className="window__info-title">
          <i class="fas fa-paw"></i>
        </span>
        {character.species}
      </li>
      <li className="window__info-item">
        <span className="window__info-title">
          <i class="fas fa-venus-mars"></i>
        </span>
        {character.gender}
      </li>
    </ul>
  );

  return (
    <li className="list-group-item character-item" onClick={openPopup}>
      <div className="character">
        <div className="character__img-wrap">
          <RmImage url={character.image} className="character__img" />
        </div>
        <div className="character__content">
          <h2 className="character__name">{character.name}</h2>
          <ul className="character__info-list">
            <li className="character__info-item">
              <span className="character__info-title">
                <i class="fas fa-paw"></i>{" "}
              </span>
              {character.species}
            </li>
            <li className="character__info-item">
              <span className="character__info-title">
                <i class="fas fa-venus-mars"></i>{" "}
              </span>
              {character.gender}
            </li>
            <li className="character__info-item">
              <span className="character__info-title">
                <i class="far fa-address-card"></i>{" "}
              </span>
              {character.status}
            </li>
          </ul>
        </div>
      </div>
      <RmPopup
        header={character.name}
        main={main}
        character={character}
        window={window}
        setWindow={setWindow}
      />
    </li>
  );
};
