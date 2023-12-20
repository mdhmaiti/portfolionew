import { Github, Linkedin, Mail, Album } from "lucide-react"
import Link from "next/link"



const Icons = () => {
  return (
    <div className="flex flex-row justify-center item-center space-x-5  ">
    <Link className="glow hover:text-cyan-400" href=" https://github.com/mdhmaiti"><Github /></Link> 
    <Link className="glow hover:text-cyan-400" href="https://www.linkedin.com/in/medhashis-maiti-3197881a8/"><Linkedin /></Link>
    <Link  className="glow hover:text-cyan-400" href="http://google.com/"><Mail /></Link>
    <Link  className="glow hover:text-cyan-400" href="https://medhashis.hashnode.dev"><Album /></Link>


     </div>
  )
}

export default Icons