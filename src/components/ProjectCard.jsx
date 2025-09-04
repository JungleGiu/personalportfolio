

export const ProjectCard = ({project , key}) => {
  return (
    <div className="p-5 border-2 max-w-md border-blue-950 dark:border-gray-200" key={key}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

    </div>
  )
}
