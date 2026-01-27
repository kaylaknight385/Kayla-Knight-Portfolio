function Projects() {
  const projects = [
    {
      id: 1,
      title: "Task Manager",
      description: "A fun, humorous, interactive task manager! Where you can create, edit, delete tasks. Filter through different task priorities and more! Check it out!",
      github: "https://github.com/kaylaknight385/task-dashboard",
      demo: "https://taskdashboard-nu.vercel.app/"
    },
    {
      id: 2,
      title: "Secure Blog Page",
      description: "A cozy secure blog page! Login as admin are review, delete, and edit existing posts from users.",
      github: "https://github.com/kaylaknight385/reactBlog",
      demo: "https://littlecorner-blog-8irq94fs1-kayla-knights-projects.vercel.app/"
    },
     {
      id: 2,
      title: "Secure Blog Page",
      description: "A cozy secure blog page! Login as admin are review, delete, and edit existing posts from users.",
      github: "https://github.com/kaylaknight385/reactBlog",
      demo: "https://littlecorner-blog-8irq94fs1-kayla-knights-projects.vercel.app/"
    },
    // add more
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
