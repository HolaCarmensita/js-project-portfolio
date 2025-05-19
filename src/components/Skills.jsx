import profile from '../data/profile.json';
import SkillCategory from './SkillsCategory';
import styled from 'styled-components';
import LayoutWrapper from './LayoutWrapper';
import CircleLeft from './CircleLeft';
import CircleRight from './CircleRight';
import { slideUpAnimation, hoverScale } from '../styles/styled-utils';

const FullWidthSection = styled.section`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media (min-width: 768px) {
    gap: 8rem;
  }
`;

const SkillsSection = styled.section`
  width: 100%;
  h2 {
    ${slideUpAnimation}
    text-transform: uppercase;
    text-align: center;
  }
`;

const Divader = styled.div`
  padding: 2rem;
  @media (min-width: 768px) {
    padding: 4rem;
  }
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
      {/* <CircleLeft color='var(--color-mustard)' YPosition='90%' $mobile={true} />
      <CircleRight color='var(--color-mustard)' YPosition='13%' /> */}
    </FullWidthSection>
  );
}

export default Skills;
