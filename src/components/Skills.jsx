import profile from '../data/profile.json';
import SkillCategory from './SkillsCategory';
import styled from 'styled-components';
import LayoutWrapper from './LayoutWrapper';
import CircleLeft from './CircleLeft';
import CircleRight from './CircleRight';
import { slideUpAnimation, hoverScale } from '../styles/styled-utils';

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const SkillsSection = styled.section`
  padding-bottom: 3rem;

  h2 {
    ${slideUpAnimation}
    text-transform: uppercase;
    text-align: center;
    padding: 3rem 0 3rem 0;
  }

  @media (min-width: 1367px) {
    padding-bottom: 6rem;

    h2 {
      padding: 0rem 0 3rem 0;
    }
  }
`;

const FullWidthSection = styled.section`
  position: relative;
`;

function Skills() {
  return (
    <FullWidthSection id='about'>
      <LayoutWrapper>
        <SkillsSection>
          <h2>Skills</h2>
          <SkillCard>
            {Object.entries(profile.skills).map(([title, skills]) => (
              <SkillCategory key={title} title={title} skills={skills} />
            ))}
          </SkillCard>
        </SkillsSection>
      </LayoutWrapper>
      <CircleLeft color='var(--color-mustard)' YPosition='90%' />
      <CircleRight color='var(--color-mustard)' YPosition='13%' />
    </FullWidthSection>
  );
}

export default Skills;
