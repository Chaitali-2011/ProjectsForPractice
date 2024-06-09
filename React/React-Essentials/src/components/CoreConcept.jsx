// function CoreConcept(props) {
export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      {/* <img src={props.img} alt="" /> */}

      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
