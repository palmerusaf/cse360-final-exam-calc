import { useState } from "react"

function App() {
  const [average, setAverage] = useState(NaN)
  const [midterm, setMidterm] = useState(NaN)
  return (
    <div className="p-12 w-screen h-screen text-white bg-slate-800">
      <h1 className="w-full text-xl font-bold text-center">CSE 360 Final Exam Grade Calculator</h1>
      <div className="grid gap-2 justify-center w-full font-bold">
        <label >
          Enter current Average:
        </label>
        <input type="text" className="pl-2 text-black rounded-full" onChange={({ target }) => { setAverage(Number.parseFloat(target.value)) }} placeholder="Ex. if 84% enter 84" />
        <label >
          Enter midterm raw score:
        </label>
        <input type="text" className="pl-2 text-black rounded-full" onChange={({ target }) => { setMidterm(Number.parseFloat(target.value)) }} placeholder="Ex. if 33.5/50 enter 33.5" />
        <div>
          <Display key={midterm + average} average={average} midterm={midterm} />
        </div>
      </div>
    </div>
  )
}

export default App

function Display({ midterm, average }: { average: number, midterm: number }) {
  if (Number.isNaN(midterm) || Number.isNaN(average) || (average < 0 || average > 100) || (midterm < 0 || midterm > 50)) {
    return <div className="text-red-500 duration-500 ease-in-out animate-in slide-in-from-top fade-in">Invalid Input</div>
  }
  return (
    <div className="duration-700 ease-in-out slide-out-to-left animate-in fade-in">
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
