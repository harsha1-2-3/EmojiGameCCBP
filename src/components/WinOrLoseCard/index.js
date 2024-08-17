import './index.css'

const WinOrLoseCard = ({score, clickedPlayAgain}) => {
  const isWin = score === 12
  const msg = isWin ? 'You Won' : 'You Lose'
  const image = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const msg2 = isWin ? 'Best Score' : 'Score'

  return (
    <div className="bg">
      <nav className="navbarWon">
        <div className="logoHeadWon">
          <img
            className="logo"
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />
          <h1 className="head">Emoji Game</h1>
        </div>
      </nav>
      <div className="bottomEmojiCont">
        <div className="wonCont">
          <img className="wonImg" alt="win or lose" src={image} />
          <div className="wonText">
            <h1 className="wonHead">{msg}</h1>
            <p className="wonPara">{msg2}</p>
            <p className="wonScore">{score}/12</p>
            <button
              type="button"
              onClick={clickedPlayAgain}
              className="playBtn"
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
