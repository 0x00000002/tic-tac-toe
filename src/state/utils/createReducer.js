export default (initialState, reducerMap) => (state = initialState, action = null) => {
  const reducer = reducerMap[action.type]
  return reducer ? reducer(state, action) : state
}
