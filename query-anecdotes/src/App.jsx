import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getAll, updateVote } from "./requests.js"
import { useNotiDispatcher } from './AnecdoteContext.jsx'

const App = () => {
  const notiDispatcher = useNotiDispatcher()

  const queryClient = useQueryClient()
  const updateVoteMutation = useMutation({
    mutationFn: updateVote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["anecdotes"] })
    }
  })

  const handleVote = (anecdote) => {
    updateVoteMutation.mutate(anecdote)
    notiDispatcher({ type: "UPDATE", payload: `you voted ${anecdote.content}` })
    setTimeout(() => {
      notiDispatcher({ type: "UPDATE", payload: null })
    }, 5000)
  }

  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAll
  })

  if (result.isPending) {
    return <div>loading data...</div>
  }

  if (result.isError) {
    return <div>anecdote service not available due to problems in server</div>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
