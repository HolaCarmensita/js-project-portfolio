import profile from '../data/profile.json';
import SkillCategory from './SkillsCategory';
import styled from 'styled-components';
import LayoutWrapper from './LayoutWrapper';

const SkillCard = styled.div`
  /* överväger grid här istället, börjar bli förvirrande med all flex */
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const SkillsSection = styled.section`
  position: relative;
  padding-top: 2rem;
  padding-bottom: 5rem;

  h2 {
    text-transform: uppercase;
    text-align: center;
    padding: 3rem;
  }
`;

function Skills() {
  return (
    <SkillsSection id='about'>
      <LayoutWrapper>
        <h2>Skills</h2>
        <SkillCard>
          {Object.entries(profile.skills).map(([title, skills]) => (
            <SkillCategory key={title} title={title} skills={skills} />
          ))}
        </SkillCard>
      </LayoutWrapper>
    </SkillsSection>
  );
}

export default Skills;
