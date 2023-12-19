const Course = ({course}) => {
  return (
  <div>
    <Header name={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
  </div>
  )
}

const Content = ({parts}) => {
  return (
    <div>
    {parts.map(part => <Part key={part.id} part={part}/>)}
    </div>
  )
}


const Header = ({name}) => <h1> {name} </h1>

const Part = ({part}) => <p>{part.name} {part.exercises} </p>

const Total = ({parts}) => <b>Total of exercises {parts.reduce((sum, part) => sum += part.exercises ,0)} </b>


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

export default App