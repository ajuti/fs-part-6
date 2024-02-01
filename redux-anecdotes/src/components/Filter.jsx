import { useDispatch } from "react-redux"
import { addFilter } from "../reducers/filterReducer"

const Filter = (props) => {
  const dispatch = useDispatch()
  
  const handleChange = (event) => {
    dispatch(addFilter({ filter: event.target.value }))
  } 
  
  return (
    <>
      filter <input type="text" onChange={handleChange} />
    </>
  )
  
}

export default Filter