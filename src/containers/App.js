import { connect } from 'react-redux'
import App from '../components/App'
import { gameOperations } from '../state/sagas/'

export const mapStateToProps = state => ({
  game: state.game
})

export const mapDispatchToProps = {
  move: gameOperations.move,
  newGame: gameOperations.newGame
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
