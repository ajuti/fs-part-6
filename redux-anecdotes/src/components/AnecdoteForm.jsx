import { useDispatch } from "react-redux"
import { appendAnecdote } from "../reducers/anecdoteReducer.js"
import { setNoti } from "../reducers/notificationReducer.js"
import anecdoteService from "../services/anecdoteService.js"

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnecdote = async(event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ""
    const created = await anecdoteService.newAnecdote({ content: anecdote })
    dispatch(appendAnecdote(created))
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