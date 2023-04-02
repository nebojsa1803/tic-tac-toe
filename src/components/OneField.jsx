import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  updateFieldsContentOnFieldClick,
  checkWinner,
} from '../features/board/boardSlice'

const OneField = ({ id, fieldContent }) => {
  const { currentStateForMarkChainge, fieldsContent, winningCombination } =
    useSelector((store) => store.board)

  const dispatch = useDispatch()

  //every time field content change, check, maybe we have winner
  // if we have winner, function will take winning mark (X, O) and winnig combination
  useEffect(() => {
    dispatch(checkWinner(fieldsContent))
  }, [fieldContent])

  return (
    <button
      className={winningCombination.includes(id) ? 'winner' : ''}
      onClick={() => {
        dispatch(
          updateFieldsContentOnFieldClick({
            fieldId: id,
            mark: currentStateForMarkChainge ? 'X' : 'O',
          })
        )
      }}
      disabled={fieldContent && true}
    >
      {fieldContent}
    </button>
  )
}

export default OneField
