import './index.css'

const EmojiCard = ({cardDetails, clickedEmoji}) => {
  const {id, emojiName, emojiUrl} = cardDetails

  const onClickEmoji = () => {
    clickedEmoji(id)
  }

  return (
    <li className="emoji">
      <button
        data-testid="emoji"
        onClick={onClickEmoji}
        type="button"
        className="btn"
      >
        <img className="icon" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
