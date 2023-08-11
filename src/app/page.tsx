import { ModeToggle } from '@/components/navbar/toggle-light-dark'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <ModeToggle/>
      <h1 className="text-3xl font-bold">
      
        hello
      </h1>
    </div>
   
  )
}
