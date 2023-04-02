import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showModal: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.showModal = true
    },
    closeModal: (state) => {
      state.showModal = false
    },
  },
})

export default modalSlice.reducer
export const { openModal, closeModal } = modalSlice.actions
