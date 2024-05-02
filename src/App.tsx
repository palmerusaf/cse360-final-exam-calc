import { useState } from "react"

function App() {
  const [average, setAverage] = useState(NaN)
  const [midterm, setMidterm] = useState(NaN)
  const [rounded, setRounded] = useState(false)
  return (
    <div className="p-12 w-screen h-screen text-white bg-slate-800">
      <h1 className="w-full text-xl font-bold text-center">CSE 360 Final Exam Grade Calculator</h1>
      <div className="grid gap-2 justify-center w-full font-bold">
        <label >
          Enter Current Average:
        </label>
        <input type="text" className="pl-2 text-black rounded-full" onChange={({ target }) => { setAverage(Number.parseFloat(target.value)) }} placeholder="Ex. if 84% enter 84" />
        <label >
          Enter Midterm Raw Score:
        </label>
        <input type="text" className="pl-2 text-black rounded-full" onChange={({ target }) => { setMidterm(Number.parseFloat(target.value)) }} placeholder="Ex. if 33.5/50 enter 33.5" />
        <label >
          If Prof Rounds to Next Letter:
          <input type="checkbox" className="ml-2" onChange={() => { setRounded(!rounded) }} placeholder="Ex. if 33.5/50 enter 33.5" />
        </label>
        <div>
          <Display key={midterm + average} />
        </div>
      </div>
    </div>
  )
  function Display() {
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
      if (rounded) {
        final -= .5
      }
      const minusExams = average - 30 * (midterm / 50)
      const rawFinalScore = Math.ceil((((final - minusExams) * 107) / 30) - midterm)
      return `${rawFinalScore}/57 or ${Math.ceil(rawFinalScore / 57 * 100)}%`;
    }
  }
}

export default App
