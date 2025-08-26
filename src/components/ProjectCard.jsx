

export const ProjectCard = ({project , key}) => {
  return (
    <div key={key}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

    </div>
  )
}
