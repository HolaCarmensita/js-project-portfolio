import profile from '../data/profile.json';
import SkillCategory from './SkillsCategory';
import styled from 'styled-components';
import LayoutWrapper from './LayoutWrapper';

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const SkillsSection = styled.section`
  h2 {
    text-transform: uppercase;
    text-align: center;
    padding: 3rem;
  }
`;

function Skills() {
  return (
    <LayoutWrapper>
      <SkillsSection id='about'>
        <h2>Skills</h2>
        <SkillCard>
          {Object.entries(profile.skills).map(([title, skills]) => (
            <SkillCategory key={title} title={title} skills={skills} />
          ))}
        </SkillCard>
      </SkillsSection>
    </LayoutWrapper>
  );
}

export default Skills;
