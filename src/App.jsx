import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Board from './components/Board'
import Modal from './components/Modal'
import { openModal } from './features/modal/modalSlice'
function App() {
  const { showModal } = useSelector((store) => store.modal)
  const { winner, fieldsContent } = useSelector((store) => store.board)

  const dispatch = useDispatch()

  //if we have winner, modal must be shown
  useEffect(() => {
    if (winner !== '') {
      dispatch(openModal())
    }
  }, [winner])

  return (
    <div className='App'>
      {/*show modal if we have winner, or all fields are filled */}
      {(showModal || fieldsContent.every((field) => field !== '')) && <Modal />}
      <Board />
    </div>
  )
}

export default App
