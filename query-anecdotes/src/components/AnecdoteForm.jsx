import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createAnecdote } from "../requests"
import { useNotiDispatcher } from "../AnecdoteContext"

const getId = () => {
  return Math.floor(Math.random() * 100000).toString()
}
const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const notiDispatcher = useNotiDispatcher()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] })
    },
    onError: () => {
      notiDispatcher({ type: "UPDATE", payload: `too short anecdote, must have length 5 or more` })
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, id: getId(), votes: 0 })
    notiDispatcher({ type: "UPDATE", payload: `you added '${content}'` })
    setTimeout(() => {
      notiDispatcher({ type: "UPDATE", payload: null })
    }, 5000)
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
