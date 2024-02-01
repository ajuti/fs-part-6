import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes"

const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async() => {
  const res = await axios.get(baseUrl)
  console.log(res.data)
  return res.data
}

const newAnecdote = async({ content }) => {
  const res = await axios.post(baseUrl, { content, id: getId(), votes: 0 })
  console.log(res.data)
  return res.data
}

export default { getAll, newAnecdote }