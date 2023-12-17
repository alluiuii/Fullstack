import { useState } from 'react'

const Header = ({text}) => (<h1> {text} </h1>)

const Button = ({text, handleClick}) => (<button onClick={handleClick}> {text} </button>)

const Statistics = (props) => {
  console.log(props.good)
  if (props.good == 0 && props.bad == 0 && props.neutral == 0) {
    return <div> No feedback given </div>
  }
  return (
    <div>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="average" value={props.average}/>
      <StatisticLine text="positive" value={props.positive}/>
    </div>
  )
}

const StatisticLine = ({text, value}) => (<p> {text} {value} </p>)


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const average = (good + bad*-1) / (good+neutral+bad)
  const positive = (good / (good + neutral + bad)*100) +" %"


  return (
    <div>
      <Header text="give feedback"/>
      <Button text="good" handleClick={() => setGood(good+1)}/> <Button text="neutral" handleClick={() => setNeutral(neutral+1)}/> <Button text="bad" handleClick={() => setBad(bad+1)}/>
      <Header text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad} average={average} positive= {positive}/>
  
    </div>
  )
}

export default App