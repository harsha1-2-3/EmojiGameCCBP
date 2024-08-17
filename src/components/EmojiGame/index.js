import {Component} from 'react'

import NavBar from '../NavBar/index'

import EmojiCard from '../EmojiCard/index'

import WinOrLoseCard from '../WinOrLoseCard/index'

import './index.css'

class EmojiGame extends Component {
  state = {
    prevIds: [],
    score: 0,
    topScore: 0,
    gameOver: false,
  }

  shuffleEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickedEmoji = id => {
    const {prevIds, topScore} = this.state
    if (!prevIds.includes(id)) {
      this.setState(
        prevState => ({
          score: prevState.score + 1,
          topScore:
            prevState.score + 1 > topScore ? prevState.score + 1 : topScore,
          prevIds: [...prevState.prevIds, id],
        }),
        () => {
          const {score} = this.state
          const {emojisList} = this.props
          if (score === emojisList.length) {
            this.setState({gameOver: true})
          }
        },
      )
    } else {
      this.setState({gameOver: true})
    }
  }

  clickedPlayAgain = () => {
    this.setState({
      prevIds: [],
      score: 0,
      gameOver: false,
    })
  }

  render() {
    const {score, topScore, gameOver} = this.state
    const shuffleEmojisList = this.shuffleEmojisList()

    return (
      <div className="bg">
        <NavBar gameOver={gameOver} score={score} topScore={topScore} />
        <div className="bottomEmojiCont">
          {!gameOver ? (
            <ul className="emojisCont">
              {shuffleEmojisList.map(eachCard => (
                <EmojiCard
                  cardDetails={eachCard}
                  key={eachCard.id}
                  clickedEmoji={this.clickedEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              score={score}
              topScore={topScore}
              clickedPlayAgain={this.clickedPlayAgain}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
