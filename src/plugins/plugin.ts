import colors from "tailwindcss/colors"
export default function getTailwindColors() {
  Object.keys(colors).forEach((value) => {
    console.log(value)
  })
}