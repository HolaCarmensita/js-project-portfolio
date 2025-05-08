import styled from 'styled-components';

const TechContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 0.5rem;
  column-gap: 1rem;
  font-size: 14px;

  color: grey;
  list-style: none;
  padding: 0;
  margin: 0;
  text-transform: uppercase;

  @media (min-width: 768px) {
    justify-content: flex-start;
    font-size: 16px;
  }
`;

function Techniques({ list }) {
  return (
    <TechContainer>
      {list.map((tech, index) => (
        <li key={index}>{tech}</li>
      ))}
    </TechContainer>
  );
}

export default Techniques;
