import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';
import styled from 'styled-components';
import LayoutWrapper from './LayoutWrapper';

const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    text-align: center;
  }
`;

const ProjectSectionChild = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

function Projects() {
  return (
    <LayoutWrapper>
      <ProjectSection id='projects'>
        <h2>Featured Projects</h2>
        <ProjectSectionChild>
          {projectsData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ProjectSectionChild>
      </ProjectSection>
    </LayoutWrapper>
  );
}

export default Projects;
