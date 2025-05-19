import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';
import styled from 'styled-components';
import LayoutWrapper from './LayoutWrapper';
import {
  slideUpAnimation,
  appearAnimation,
  slideUpAnimationFast,
} from '../styles/styled-utils';

const FullWidthSection = styled.section`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;

const ProjectCardContainer = styled.div`
  ${slideUpAnimationFast}
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

function Projects() {
  return (
    <FullWidthSection>
      <LayoutWrapper id='projects'>
        <ProjectSection>
          <h2>Featured Projects</h2>
          <ProjectCardContainer>
            {projectsData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </ProjectCardContainer>
        </ProjectSection>
      </LayoutWrapper>
    </FullWidthSection>
  );
}

export default Projects;
