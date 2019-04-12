import React from 'react'

const Result = ({ winner }) => {
  return winner ? (
    <h2>{winner === 'x' ? 'You' : 'Computer'} win!</h2>
  ) : false
}

export default Result
