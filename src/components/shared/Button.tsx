
import { FC } from "react"

{/* Button */ }

const Button: FC<{ text: string }> = ({ text }) => {
  return (

    <button className="hover:bg-emerald-800 bg-emerald-700 px-5 py-3 text-white font-semibold rounded-md shadow-lg">{text} </button>

  )
}

export default Button