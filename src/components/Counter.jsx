import { useDispatch, useSelector } from "react-redux"
import {increment, decrement,incrementByPayload} from "../redux/feature/counter/counterSlice"
const Counter = () => {
    const {count} = useSelector((state)=>state.counter)

    const dispatch = useDispatch()

    console.log(count);
  return (
    <div>
       <button onClick={()=>dispatch(incrementByPayload(5))}>incrementByPayload 5</button>
<br/>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <div>
            <h1>{count}</h1>
        </div>
        <button onClick={()=>dispatch(decrement())}>decrement</button>

    </div>
  )
}

export default Counter