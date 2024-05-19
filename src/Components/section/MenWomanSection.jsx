/* eslint-disable react/prop-types */
import Card from "../ui/Card";

const MenWomanSection = ({data , title }) => {
  return (
    <section className="w-full min-h-[40rem] p-8 border-2">
      <h2 className="font-bold text-center text-4xl "> {title} </h2>
      <ul className=" w-full mt-8 justify-center flex gap-8 flex-wrap items-center">
        {data.map((item) => (
          <Card
            key={item.key}
            id={item.id}
            name={item.name}
            image={item.image}
          />
        ))}
      </ul>
    </section>
  );
};

export default MenWomanSection;
