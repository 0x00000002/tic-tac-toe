import { connect } from 'react-redux'
import App from '../components/App'
import newOperations from '../state/ducks/game'

export const mapStateToProps = state => ({
  newState: state.newState
})

export const mapDispatchToProps = {
  newProp: newOperations.new
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
