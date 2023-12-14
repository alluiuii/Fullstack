const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  const Header = (props) => (
    <h1> {props.name} </h1>
  )
  const Part = (props) => {
    console.log(props)
    return (
    <p>{props.part.name} {props.part.exercises} </p>
  )}
  const Content = (props) => {
    return (
      <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
      </div>
    )
  }
  const Total = (props) => {
    return (
    <p> Number of exercises {props.sum} </p>
  )}
 

  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total sum={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
}

export default App