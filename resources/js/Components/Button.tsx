import { clsx } from "clsx";
import {ButtonProps} from "@/js/interfaces/Components/ButtonProps";

const Button = ({ children, color = 'white', size = 'md', className, onClick, type, ...rest}: ButtonProps) => {
  const classes = clsx([
    className,
    "transition-all duration-300 ease-in-out",
    {
      "px-3 py-1 text-sm font-normal rounded-lg": size === "sm",
      "px-4 py-2 text-md font-semibold rounded-md": size === "md",
      "px-8 py-2 text-lg font-bold rounded-md": size === "lg",
    },
    {
      "bg-indigo-500 border border-indigo-500 text-neutral-100 hover:bg-transparent hover:text-indigo-500": color === "primary",
      "bg-neutral-100 border border-neutral-100 text-neutral-800 hover:bg-transparent hover:text-neutral-100": color === "white",
      "bg-gray-500 border border-gray-500 text-neutral-100 hover:bg-transparent hover:text-gray-500": color === "gray",
      "bg-red-500 border border-red-500 text-neutral-100 hover:bg-transparent hover:text-red-500": color === "red",
      "bg-green-500 border border-green-500 text-neutral-100 hover:bg-transparent hover:text-green-500": color === "green",
      "bg-blue-500 border border-blue-500 text-neutral-100 hover:bg-transparent hover:text-blue-500": color === "blue",
      "bg-yellow-500 border border-yellow-500 text-neutral-100 hover:bg-transparent hover:text-yellow-500": color === "yellow",
      "bg-purple-500 border border-purple-500 text-neutral-100 hover:bg-transparent hover:text-purple-500": color === "purple",
      "bg-pink-500 border border-pink-500 text-neutral-100 hover:bg-transparent hover:text-pink-500": color === "pink",
    },
  ])

  return <button className={classes} onClick={onClick} type={type} {...rest}>
    { children }
  </button>;
}

export default Button;
