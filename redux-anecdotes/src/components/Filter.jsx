import { useDispatch, useSelector } from "react-redux"
import { addFilter } from "../reducers/filterReducer"

const Filter = (props) => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)
  
  const handleChange = (event) => {
    dispatch(addFilter(event.target.value))
  } 
  
  return (
    <>
      filter <input type="text" value={filter} onChange={handleChange} />
    </>
  )
  
}

export default Filter