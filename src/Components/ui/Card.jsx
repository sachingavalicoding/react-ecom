/* eslint-disable react/prop-types */

const Card = ({id, name , image}) => {
  return (
    <li className="border-2 px-2 py-3" key={id}>
      <h2> {name} </h2>
      <img src={image} alt="" />
    </li>
  );
}

export default Card
