import profile from '../data/profile.json';
import SkillCategory from './SkillsCategory';
import styled from 'styled-components';

const CircleWrapper = styled.div`
  position: absolute;
  top: 1rem; /* anpassa till h2-padding */
  right: -50px; /* halva SVG:ns bredd */
  z-index: -1; /* bakom innehåll om det behövs */
  width: 100px;
  height: auto;
`;

const SkillCard = styled.div`
  /* överväger grid här istället, börjar bli förvirrande med all flex */
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const SkillsSection = styled.section`
  position: relative;
  overflow: hidden;

  h2 {
    text-transform: uppercase;
    text-align: center;
    padding: 3rem;
  }
`;

function Skills() {
  return (
    <SkillsSection>
      <CircleWrapper>
        <svg
          viewBox='0 0 245 245'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M122.5 245C190.155 245 245 190.155 245 122.5C245 54.8451 190.155 0 122.5 0C54.8451 0 0 54.8451 0 122.5C0 190.155 54.8451 245 122.5 245ZM122.5 196C163.093 196 196 163.093 196 122.5C196 81.9071 163.093 49 122.5 49C81.9071 49 49 81.9071 49 122.5C49 163.093 81.9071 196 122.5 196Z'
            fill='#FFBF00'
          />
        </svg>
      </CircleWrapper>

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
