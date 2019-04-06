import * as types from './types'
import { emptyState } from '../../utils/localStorage'

export const newOp = () => ({
  type: types.NEW_COMPLETED,
  payload: emptyState.newOperations
})
