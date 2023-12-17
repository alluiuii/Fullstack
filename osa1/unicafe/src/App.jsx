import { useState } from 'react'

const Header = ({text}) => (<h1> {text} </h1>)

const Button = ({text, handleClick}) => (<button onClick={handleClick}> {text} </button>)

const Statistic = ({text, value}) => (<p> {text} {value} </p>)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handeClick = () => {
    
  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button text="good"/> <Button text="neutral"/> <Button text="bad"/>
      <Header text="statistics"/>
      <Statistic text="good" value={good}/>
      <Statistic text="neutral" value={good}/>
      <Statistic text="bad" value={good}/>
    </div>
  )
}

export default App