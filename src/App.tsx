import { useState } from "react"

function App() {
  const [average, setAverage] = useState(0)
  const [midterm, setMidterm] = useState(0)
  return (
    <div className="p-12 w-screen h-screen text-white bg-slate-800">
      <h1 className="w-full text-xl font-bold text-center">CSE 360 Final Exam Grade Calculator</h1>
      <div className="grid gap-2 justify-center w-full font-bold">
        <label >
          Enter current Average:
        </label>
        <input type="text" className="text-black" onChange={({ target }) => { setAverage(Number.parseFloat(target.value)) }} placeholder="Ex. if 84% enter 84" />
        <label >
          Enter midterm raw score:
        </label>
        <input type="text" className="text-black" onChange={({ target }) => { setMidterm(Number.parseFloat(target.value)) }} placeholder="Ex. if 33.5/50 enter 33.5" />
        <div>
          <Display average={average} midterm={midterm} />
        </div>
      </div>
    </div>
  )
}

export default App

function Display({ midterm, average }: { average: number, midterm: number }) {
  if (Number.isNaN(midterm) || Number.isNaN(average)) {
    return <div className="text-red-500">Invalid Input</div>
  }
  return (
    <div>
      <h2>Required Score:</h2>
      <div>C: {reqScore(70)}</div>
      <div>C+: {reqScore(77)}</div>
      <div>B: {reqScore(80)}</div>
      <div>B+: {reqScore(87)}</div>
      <div>A: {reqScore(90)}</div>
      <div>A+: {reqScore(97)}</div>
    </div>
  )
  function reqScore(final: number) {
    const minusExams = average - 30 * (midterm / 50)
    return Math.ceil((((final - minusExams) / 15) - (midterm / 50)) * 100) + "%";
  }
}
