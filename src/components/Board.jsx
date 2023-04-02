import React, { useId } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetGame } from '../features/board/boardSlice'
import OneField from './OneField'

const Board = () => {
  const { fieldsContent } = useSelector((store) => store.board)
  const dispatch = useDispatch()

  return (
    //3 lines of divs, each div with 3 components, buttons, with props
    // props id - represents position on board, and fieldContent - element from state on id position

    <div className='wrapper'>
      <div className='heading'>
        <h1>TIC TAC TOE</h1>
      </div>
      <div className='board'>
        <div className='row'>
          {fieldsContent.slice(0, 3).map((fieldContent, index) => (
            <OneField key={useId()} id={index} fieldContent={fieldContent} />
          ))}
        </div>
        <div className='row'>
          {fieldsContent.slice(3, 6).map((fieldContent, index) => (
            <OneField
              key={useId()}
              id={index + 3}
              fieldContent={fieldContent}
            />
          ))}
        </div>
        <div className='row'>
          {fieldsContent.slice(6, 9).map((fieldContent, index) => (
            <OneField
              key={useId()}
              id={index + 6}
              fieldContent={fieldContent}
            />
          ))}
        </div>
      </div>
      <div className='row reset-btn'>
        <button onClick={() => dispatch(resetGame())}>RESET</button>
      </div>
    </div>
  )
}

export default Board
