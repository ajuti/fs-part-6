import { useNotiValue } from "../AnecdoteContext"

const Notification = () => {
  const text = useNotiValue()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  console.log(text)

  if (!text) {
    return null
  }

  return (
    <div style={style}>
      {text}
    </div>
  )
}

export default Notification
