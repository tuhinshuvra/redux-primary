import { decrement, increment, incrementByAmount } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';


function App() {
  const { count } = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className=" my-3  text-center">
      <div className=" flex">
        <button className=" mx-3 bg-green-700 p-1 rounded-md" onClick={() => dispatch(increment())} >
          Increement
        </button>
        <button className=" bg-green-700 p-1 rounded-md" onClick={() => dispatch(incrementByAmount(10))} >
          AmountIncrement
        </button>

        <div className=" mx-3">{count}</div>

        <button className=" mx-3 bg-green-700 p-1 rounded-md" onClick={() => dispatch(decrement())} >
          Decreement
        </button>
      </div>
    </div>
  )
}

export default App
