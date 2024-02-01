import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdoteService"

const initialState = []

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState,
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    voteAnecdote(state, action) {
      return state.map(anecdote => anecdote.id !== action.payload.id ? anecdote : {...anecdote, votes: anecdote.votes + 1})
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const created = await anecdoteService.newAnecdote(content)
    dispatch(appendAnecdote(created))
  }
}

export const { appendAnecdote, voteAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer