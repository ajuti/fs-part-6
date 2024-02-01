import { createContext, useReducer, useContext } from "react";

const AnecdoteContext = createContext()

const notiReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return action.payload
    default: null
  }
}

export const useNotiValue = () => {
  const context = useContext(AnecdoteContext)
  return context[0]
}

export const useNotiDispatcher = () => {
  const context = useContext(AnecdoteContext)
  return context[1]
}

export const AnecdoteContextProvider = (props) => {
  const [notiText, dispatcher] = useReducer(notiReducer, null)

  return (
    <AnecdoteContext.Provider value={[notiText, dispatcher]}>
      {props.children}
    </AnecdoteContext.Provider>
  )
}

export default AnecdoteContext