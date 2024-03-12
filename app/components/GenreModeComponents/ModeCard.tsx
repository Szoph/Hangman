type Props = {
    onClick: () => void;
    mode: string;
}

const ModeCard = ({onClick, mode}: Props) => {
    return (
        <div className="mode-card" onClick={onClick}>
            <p className="mode-text">{mode}</p>
        </div>
    )
};

export default ModeCard;