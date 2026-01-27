function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project Name",
      description: "Brief description of your project",
      github: "https://github.com/kaylaknight385/task-dashboard",
      demo: "https://your-demo-link.com"
    },
    // Add more
  ];

  return (
    <div className="projectsPage">
      <h1>My Projects </h1>
      <div className="projectsGrid">
        {projects.map(project => (
          <div key={project.id} className="projectCard">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="projectLinks">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub →
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
