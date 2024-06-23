import { useState } from "react"
import CounterWithClass from "./components/CounterWithClass"
import CounterWithFunc from "./components/CounterWithFunc"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>app count : {count}</h1>
      <CounterWithClass />
      <CounterWithFunc count={count} setCount={setCount} />
    </>
  )
}

export default App
