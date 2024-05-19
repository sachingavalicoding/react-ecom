/* eslint-disable react/prop-types */


const Button = ({text, classname}) => {
    return (
        <button className={`px-8 py-4 text-white bg-black rounded-md  hover:bg-transparent hover:text-black duration-500 ${classname}`}>
      {text}
    </button>
  )
}

export default Button
