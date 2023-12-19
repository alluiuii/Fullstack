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

export default Course