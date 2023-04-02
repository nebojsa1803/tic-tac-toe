import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fieldsContent: ['', '', '', '', '', '', '', '', ''], // what we have on board, empty string on start
  currentStateForMarkChainge: true, // when this change, next mark will be change, //true--> X, false --> O
  winner: '', //  who wins, X or O
  winningCombinations: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
  winningCombination: [], // winning combination, important for marking winnig fields , CSS
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    //take index of field and mark (X or O) and put them on right position in state.fieldsContent
    updateFieldsContentOnFieldClick: (state, action) => {
      const id = action.payload.fieldId
      const mark = action.payload.mark
      state.fieldsContent[id] = mark
      state.currentStateForMarkChainge = !state.currentStateForMarkChainge //true--> X, false --> O
    },
    resetGame: (state) => {
      state.fieldsContent = ['', '', '', '', '', '', '', '', '']
      state.winningCombination = []
      state.winner = ''
      state.currentStateForMarkChainge = true // when game starts, X play first
    },
    checkWinner: (state) => {
      for (let combination of state.winningCombinations) {
        // go trough all winning combinations
        const [i, j, k] = combination // take one by one
        if (
          // check, on winning fields must be same marks
          state.fieldsContent[i] !== '' &&
          state.fieldsContent[i] === state.fieldsContent[j] &&
          state.fieldsContent[j] === state.fieldsContent[k]
        ) {
          state.winner = state.fieldsContent[i] //announce the winner
          state.winningCombination = [i, j, k] // winning indexes
        }
      }
    },
  },
})

export default boardSlice.reducer
export const { updateFieldsContentOnFieldClick, resetGame, checkWinner } =
  boardSlice.actions
