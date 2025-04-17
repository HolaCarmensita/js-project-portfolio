import Techniques from './Techniques';
import Button from './Button';

function ProjectCard({ project }) {
  console.log(`path`, project.image);
  return (
    <article>
      <img
        src={project.image}
        alt={`${project.name} preview`}
        style={{ width: '450px', height: '300px', objectFit: 'cover' }}
      />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <Button
        text='Live demo'
        href={project.netlify}
        target='_blank'
        rel='noopener noreferrer'
      />
      <Button
        text='GitHub'
        href={project.github}
        target='_blank'
        rel='noopener noreferrer'
      />
      <Techniques list={project.tags} />
    </article>
  );
}

export default ProjectCard;
