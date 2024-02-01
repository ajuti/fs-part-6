import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes"

export const getAll = async() => {
  return axios.get(baseUrl).then(res => res.data)
}

export const createAnecdote = async(newAnecdote) => {
  return axios.post(baseUrl, newAnecdote).then(res => res.data)
}

export const updateVote = async(anecdote) => {
  return axios.patch(`${baseUrl}/${anecdote.id}`, { votes: anecdote.votes + 1})
}