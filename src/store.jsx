import { configureStore } from '@reduxjs/toolkit'
import boardReducer from './features/board/boardSlice'
import modalSlice from './features/modal/modalSlice'

export const store = configureStore({
  reducer: {
    board: boardReducer,
    modal: modalSlice,
  },
})
