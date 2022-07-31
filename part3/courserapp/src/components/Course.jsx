import Part from "./Part.jsx";

function Course(props) {
  return (
    <div>
      <h2>{props.course.name}</h2>
      {props.course.parts.map((part) => {
        return (
          <div>
            <h1>{}</h1>
            <Part key={part.id} part={part} />
          </div>
        );
      })}
    </div>
  );
}

export default Course;
