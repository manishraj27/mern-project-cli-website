import Commands from "./Commands"
import Installation from "./Installation"


const CommandsPage = () => {
  return (
    <div className="relative lg:flex-col size-full overflow-hidden rounded-lg  bg-background  md:shadow-xl">
        <Installation/>
        <Commands/>
    </div>
  )
}

export default CommandsPage