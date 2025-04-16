function Techniques({ list }) {
  return (
    <ul>
      {list.map((tech, index) => (
        <li key={index}>{tech}</li>
      ))}
    </ul>
  );
}

export default Techniques;
