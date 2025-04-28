import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';
import styled from 'styled-components';
import LayoutWrapper from './LayoutWrapper';

const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  h2 {
    text-align: center;
  }

  @media (min-width: 768px) {
    gap: 8rem;
  }
`;

const ProjectSectionChild = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;

  @media (min-width: 768px) {
    gap: 10rem;
  }
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
