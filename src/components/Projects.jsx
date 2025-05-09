import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';
import styled from 'styled-components';
import LayoutWrapper from './LayoutWrapper';
import { slideUpAnimation, appearAnimation } from '../styles/styled-utils';

const ProjectSection = styled.section`
  h2 {
    ${slideUpAnimation}
    text-align: center;
  }
`;

const ProjectSectionChild = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 768px) {
    gap: 8rem;
  }
`;

function Projects() {
  return (
    <LayoutWrapper id='projects'>
      <ProjectSection>
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
