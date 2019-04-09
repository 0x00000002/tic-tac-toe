import { connect } from 'react-redux'
import App from '../components/App'
import { gameOperations } from '../state/ducks/game'

export const mapStateToProps = state => ({
  game: state.game
})
export const mapDispatchToProps = {
  move: gameOperations.move,
  loadGame: gameOperations.loadGame
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
