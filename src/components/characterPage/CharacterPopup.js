const CharacterPopup = ({ character }) => (
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
)

export default CharacterPopup
