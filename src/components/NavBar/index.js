import './index.css'

const NavBar = props => {
  const {score, gameOver, topScore} = props
  const hideOrShowNav = gameOver ? 'bgNone' : 'navbar'

  return (
    <nav className={hideOrShowNav}>
      <div className="logoHead">
        <img
          className="logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="head">Emoji Game</h1>
      </div>
      <div className="scoresCont">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
