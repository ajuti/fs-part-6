import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer.js"
import { setNoti } from "../reducers/notificationReducer.js"

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ""
    dispatch(createAnecdote({ anecdote }))
    dispatch(setNoti({ text: `New anecdote added: '${anecdote}'` }))
    setTimeout(() => {
      dispatch(setNoti({ text: "" }))
    }, 5000)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input type="text" name="anecdote" /></div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm