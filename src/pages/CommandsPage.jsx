import DotPattern from "@/components/ui/dot-pattern"
import Commands from "./Commands"
import Installation from "./Installation"
import { cn } from "@/lib/utils"


const CommandsPage = () => {
  return (
    <div className="relative lg:flex-col size-full overflow-hidden rounded-lg  bg-background  md:shadow-xl">
        <Installation/>
        <Commands/>
        <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
        )}
      />
    </div>
  )
}

export default CommandsPage