import { useState } from 'react'

const Header = ({text}) => (<h1> {text} </h1>)

const Button = ({text, handleClick}) => (<button onClick={handleClick}> {text} </button>)

const Statistics = (props) => {
  if (props.good == 0 && props.bad == 0 && props.neutral == 0) {
    return <div> No feedback given </div>
  }
  return (
    <div>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.all}/>
      <StatisticLine text="average" value={props.average}/>
      <StatisticLine text="positive" value={props.positive}/>
    </div>
  )
}

const Taulukko = (props) => {
  if (props.good == 0 && props.bad == 0 && props.neutral == 0) {
    return <div> No feedback given </div>
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>good {props.good}</td>
        </tr>
        <tr>
          <td>neutral {props.neutral}</td>
        </tr>
        <tr>
          <td>bad {props.bad}</td>
        </tr>
        <tr>
          <td>all {props.all}</td>
        </tr>
        <tr>
          <td>average {props.average}</td>
        </tr>
        <tr>
          <td>positive {props.positive}</td>
        </tr>
      </tbody>
    </table>
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
  const all = good + bad + neutral


  return (
    <div>
      <Header text="give feedback"/>
      <Button text="good" handleClick={() => setGood(good+1)}/> <Button text="neutral" handleClick={() => setNeutral(neutral+1)}/> <Button text="bad" handleClick={() => setBad(bad+1)}/>
      <Header text="statistics"/>
      <Taulukko good={good} neutral={neutral} bad={bad} average={average} positive={positive} all={all}/>
    </div>
  )
}

export default App