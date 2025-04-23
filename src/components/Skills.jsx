import profile from '../data/profile.json';
import SkillCategory from './SkillsCategory';
import styled from 'styled-components';

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  article:nth-child(even) {
    align-items: flex-end;
    text-align: right;
  }

  article:nth-child(odd) {
    align-items: flex-start;
    text-align: left;
  }
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
    <SkillsSection>
      <h2>Skills</h2>
      <SkillCard>
        {Object.entries(profile.skills).map(([title, skills]) => (
          <SkillCategory key={title} title={title} skills={skills} />
        ))}
      </SkillCard>
    </SkillsSection>
  );
}

export default Skills;
