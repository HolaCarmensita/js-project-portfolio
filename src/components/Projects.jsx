import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section>
      <h2>Featured Projects</h2>
      <p>This is the Projects section</p>
      <div className='project-grid'>
        {projectsData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
