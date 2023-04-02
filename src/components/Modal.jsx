import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetGame } from '../features/board/boardSlice'
import { closeModal } from '../features/modal/modalSlice'

const Modal = () => {
  const dispatch = useDispatch()
  const { winner, fieldsContent } = useSelector((store) => store.board)
  return (
    <aside className='modal-container'>
      <div className='modal'>
        {winner && <h4>WE HAVE A WINNER, PLAYER {winner} WINS</h4>}{' '}
        {/* winner, announce */}
        {!winner && fieldsContent.every((field) => field !== '') && (
          <h4>THERE ARE NO WINNERS</h4>
        )}
        {/* no winner but all fields are filled*/}
        <div className='modal-btn-container'>
          <button
            className='modal-btn'
            onClick={() => {
              dispatch(closeModal())
              dispatch(resetGame())
            }}
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
