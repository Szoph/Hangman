type Props = {
    onClick: () => void;
    mode: string;
}

const ModeCard = ({onClick, mode}: Props) => {
    return (
        <div className="genre-mode__mode-card" onClick={onClick}>
            <p className="genre-mode__mode-text">{mode}</p>
        </div>
    )
};

export default ModeCard;