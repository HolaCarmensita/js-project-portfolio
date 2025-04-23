import profile from '../data/profile.json';
import SkillCategory from './SkillsCategory';

function Skills() {
  return (
    <section id='skills'>
      <h2>Skills</h2>
      {Object.entries(profile.skills).map(([title, skills]) => (
        <SkillCategory key={title} title={title} skills={skills} />
      ))}
    </section>
  );
}

export default Skills;
